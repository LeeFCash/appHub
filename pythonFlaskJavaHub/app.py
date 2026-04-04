from flask import Flask, render_template, request, jsonify
import webbrowser
#from datetime import datetime
#def open_browser():
#    webbrowser.open("http://localhost:5001/")
app = Flask(__name__)
@app.route('/')
def home_page():
    return "hello, testing..."
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
webbrowser.open("http://localhost:5001/")
#
if __name__ == '__main__':
    # comment or 
    """
    this for comment
    """
    #threading.Timer(1.0, open_browser).start()# for if I want delay 
#    webbrowser.open("http://localhost:5001/")
    app.run(debug = True, use_reloader = True, port = 5001)
