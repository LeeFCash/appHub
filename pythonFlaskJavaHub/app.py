from flask import Flask, render_template, request, jsonify
import webbrowser
import subprocess
import time
import os
import atexit
#from datetime import datetime
#def open_browser():
#    webbrowser.open("http://localhost:5001/")

def start_backend():
    global backend_process

    jar_path = os.path.abspath("jarFiles/javaBackendV2/01/app.jar")
    # detect OS # nt = windows
#    if os.name == "nt":
#        cmd = ["gradlew.bat", ":app:bootRun"]
#    else:
#        cmd = ["./gradlew", ":app:bootRun"]
    
    backend_process = subprocess.Popen([
        "java",
        "-jar",
        jar_path
        ])

def stop_backend():
    if backend_process:
        backend_process.terminate()

atexit.register(stop_backend)

app = Flask(__name__)
@app.route('/')
def home_page():
    return render_template('homePage.html')
#
@app.route('/digital_portfolio/home_page')
def digital_portfolio_home_page():
    return render_template('index.html')
#
@app.route('/digital_portfolio/about_me_tab')
def digital_portfolio_about_me_tab():
    return render_template('aboutMeTab.html')
#
@app.route('/digital_portfolio/skills')
def digital_portfolio_skills():
    return render_template('skills.html')
#
@app.route('/digital_portfolio/contact_me')
def digital_portfolio_contact_me():
    return render_template('contactMe.html')
#
@app.route('/numberGuessingGame')
def testApp():
    return render_template('numberGuessingGame.html')
#
#webbrowser.open("http://localhost:5001/")
#
if __name__ == '__main__':
    # comment or 
    """
    this for comment
    """
    #threading.Timer(1.0, open_browser).start()# for if I want delay 
    start_backend()
    time.sleep(5)
    webbrowser.open("http://localhost:5001/")
    app.run(debug = True, use_reloader = False, port = 5001)
