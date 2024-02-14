import os
import csv 
import time
import openai

openai.api_key = "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"
openai.proxy = {
    "http": "http://disrct:etsds10240305@rb-proxy-ca1.bosch.com:8080", 
    "https": "http://rb-proxy-ca1.bosch.com:8080"
}

def get_type_workout_gpt3dot5(training_type, GPTModel):
    messages = [
        {"role" : "system", "conetent":"You're a helpful assistant"},
        {"role" : "user", "content": "Give me a simple Gym exercises list with 10 different gym exercises with the exercise's name, exercise's machine and exercise's type \n\n" + training_type}]

    while True:
        try: 
            completion = openai.ChatCompletion.create(
                model = GPTModel,
                messages = messages,
                max_tokens = 200,
                temperature = 0.01, 
            )

            keywords = completion.choices[0].message.content.strip()
            if keywords.count(',') >= 30:
                return keywords
            else:
                #se o gpt for burro ele faz a requisição de novo, com menos requisições
                messages.append({"role": "user", "content":
                                "Give me a simple Gym exercises list with 5 different gym exercises with the exercise's name, exercise's machine and exercise's type \n\n" + training_type})

        except openai.error.RateLimitError as e:
            print("Rate limit error. Waiting for 61 seconds...")
            time.sleep(61)
        except openai.error.APIError as e:
            print("APIError  encountered. Waiting for 30 seconds before retrying.")
            time.sleep(30)
        except openai.error.InvalidRequestError as e:
            print("APIError encountered. Waiting for 30 seconds before retrying.")
            time.sleep(30)

def get_training_sheet(training_type, body_type, GPTModel):
    messages = [
        {"route": "system", "content": "You are a helpful assistant."},
        {"route": "system", "content": "Give me a complete training sheet for the following workout type and body type. \n\n\n" + training_type + "\n" + body_type}]
    
    while True:
        try:
            completion = openai.ChatCompletion.create(
                model = GPTModel,
                messages = messages,
                max_tokens = 200,
                temperature= 0.1,
            )

            description = completion.choices[0].message.content.strip()
            return description
        
        except openai.error.RateLimitError as e:
            print("Rate limit error. Waiting for 61 seconds.")
            time.sleep(61)
        except openai.error.APIError as e:
            print("APIError encountered. Waiting for 30 seconds before retrying.")
            time.sleep(30)
        except openai.error.InvalidRequestError as e:
            print("APIError encountered. Waiting for 30 seconds before retrying.")
            time.sleep(30)

def main():
    GPTModel = "gpt-3.5-turbo"

    with open(r'C:\Users\disrct\Desktop\TW.csv', mode='r', encoding='utf-8') as input_cs:
        reader = csv.DictReader(input_cs)

        with open(r'C:\Users\disrct\Desktop\oto.csv', mode='w', newline='', encoding='utf-8') as output_cs:
            fieldnames = reader.fieldnames
            writer = csv.DictWriter(output_cs, fieldnames=fieldnames)
            writer.writeheader()

            for row in reader:  # Alteração aqui: substituído 'header' por 'reader'
                training_name = row['Training Name']  # Corrigido 'Trainig Name' para 'Training Name'

                print("\n")
                print("------------------" + training_name + "------------------")

                body_type = row['Body Type']

                print("\n")
                print("--------------------" + body_type + "--------------------")

                training_type = get_type_workout_gpt3dot5(training_name, GPTModel)
                print("Training Type:" + training_type)
                row['Workout Type'] = training_type

                print("---------------------------------------------------------")
                training_sheet = get_training_sheet(training_type, body_type)
                print("Training Sheet" + training_sheet)
                row['Training Sheet'] = training_sheet

                writer.writerow(row)

if __name__ == '__main__':
    main()

            