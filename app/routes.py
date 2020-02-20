from flask import render_template, request, flash, session, redirect, url_for
from app import app

@app.route('/')
def index():
    if 'user' not in session:
        return redirect(url_for('login'))
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if 'user' in session:
        return redirect(url_for('index'))
    users = {'tin': 'qwerty12345'}
    login = None
    if request.method == 'POST':
        login = request.form['login']
        password = request.form['password']
        if login in users and users[login] == password:
            session['user'] = login
            return redirect(url_for('index'))
        else:
            flash("Вы ввели не верный логин или пароль")
    return render_template('login.html', login=login)


@app.route('/logout')
def logout():
    session.pop('user')
    return redirect(url_for('login'))
