# from selenium import webdriver
# from selenium.webdriver.chrome.service import Service as ChromeService
# from webdriver_manager.chrome import ChromeDriverManager
# from selenium.webdriver.chrome.options import Options

# # define custom options for the Selenium driver
# options = Options()
# options.l = "C:\Program Files\Anaconda3\chromedriver.exe"

# # create the ChromeDriver instance with custom options
# driver = webdriver.Chrome(
#     options=options
# )

import os
import csv 
import time
import openai

openai.api_key = "YOUR_API_SECRET_KEY"

OS_PATH = os.path.dirname(os.path.realpath('__file__'))
input_csv_file_path = OS_PATH + "/data/munich_company_list_input.csv"
output_csv_file_path = OS_PATH + "/output/munich_company_list_output.csv"

def get_type_workout_gpt3dot5(training_type, GPTModel):
    messages = [
        {"role" : "system", "conetent":"You're a helpful assistant"}
        {"role" : "user", "content": f"Give me a simple Gym exercises list with 10 different gym exercises with the exercise's name, exercise's machine and exercise's type \n\n {training_type}"}
    ]

    while True:
        # try: 
        #     completion = openai.ChatCompletion.create(
        #         model = GPTModel,
        #         messages = messages,
        #         max_tokens = 200,
        #         temperature = 0.01, 
        #     )

        # keywords = completion.choices[0].message.content.strip()
        # if keywords.count(',') >= 30:
        #     return keywords
        # else:
        #     #se o gpt for burro ele faz a requisição de novo, com menos requisições
        #     messages.append({"role": "user", "content": f"Give me a simple Gym exercises list with 5 different gym exercises with the exercise's name, exercise's machine and exercise's type \n\n {training_type}"})

        # except openai.error.RateLimitError as e:
        #     print("Rate limit error. Waiting for 61 seconds...")
        #     time.sleep(61)
        # except openai.error.APIError as e:
        #     print("APIError  encountered. Waiting for 30 seconds before retrying.")
        #         time.sleep(30)
        # except openai.error.InvalidRequestError as e:
        #     print("APIError encountered. Waiting for 30 seconds before retrying.")
        #     time.sleep(30)

