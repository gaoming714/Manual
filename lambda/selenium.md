# selenium

> [!TIP]
> Webdriver
> https://www.selenium.dev/documentation/en/
> https://selenium-python.readthedocs.io/

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as ExpC

#This example requires Selenium WebDriver 3.13 or newe
options = Options()
#options.add_argument('-headless') # headless
with webdriver.Firefox(executable_path='geckodriver', options=options) as driver:
    wait = WebDriverWait(driver, 10)
    driver.get("https://google.com/ncr")
    driver.find_element(By.NAME, "q").send_keys("cheese" + Keys.RETURN)
    first_result = wait.until(ExpC.presence_of_element_located((By.CSS_SELECTOR, "h3>div")))
    print(first_result.get_attribute("textContent"))

```

## following is add on

## installation

pip install selenium
geckodriver in system path or user path
https://github.com/mozilla/geckodriver/releases/

## locating elements

element is a WebElement, or error if no found
elements is a WebElement list, or [] if no found

    cheese = driver.find_element(By.ID, "cheese")
    cheese = driver.find_element_by_id(By.ID, "cheese")

### find_element returns WebDriver
represents the browser
find_element_by_id returns WebElement
represents a particular DOM node
(a control, e.g. a link or input field, etc.)

    By.CLASS_NAME           find_element_by_class_name
    By.CSS_SELECTOR         find_element_by_css_selector
    By.ID                   find_element_by_id
    By.NAME                 find_element_by_name
    By.LINK_TEXT            find_element_by_link_text
    By.PARTIAL_LINK_TEXT    find_element_by_partial_link_text
    By.TAG_NAME             find_element_by_tag_name
    By.XPATH                find_element_by_xpath

## waits

### Explicit wait

    from selenium.webdriver.support import expected_conditions as ExpC
    wait = WebDriverWait(driver, 10)
    first_result = wait.until(ExpC.presence_of_element_located((By.CSS_SELECTOR, "h3>div")))
    first_result = wait.until(lambda d: d.presence_of_element_located((By.CSS_SELECTOR, "h3>div")))

### Implicit wait

driver.implicitly_wait(10)

## Alert
Store the alert text in a variable
    text = alert.text

Press the OK button

    alert.accept()

## Keyboard
input

    driver.find_element(By.NAME, "q").send_keys("webdriver" + Keys.ENTER)

Clears the entered text

    SearchInput.clear()

## select

```python
from selenium.webdriver.support.ui import Select
select = Select(driver.find_element(By.NAME, 'name'))
select.select_by_index(index)
select.select_by_visible_text("text")
select.select_by_value(value)

select = Select(driver.find_element_by_xpath("//select[@name='name']"))
options = select.options # available option.
all_selected_options = select.all_selected_options
```

## window and frame
```python
driver.switch_to_window("windowName")
for handle in driver.window_handles:
    driver.switch_to_window(handle)

driver.switch_to_frame("frameName")
```