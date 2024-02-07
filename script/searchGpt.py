from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options

# define custom options for the Selenium driver
options = Options()
options.l = "C:\Program Files\Anaconda3\chromedriver.exe"

# create the ChromeDriver instance with custom options
driver = webdriver.Chrome(
    options=options
)