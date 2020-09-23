
from flask import Flask, render_template
app = Flask(__name__)

# just return 'Hello World!' text when the route '/' is called
@app.route('/')
def hello():
    return render_template('hello.html.j2')

# __name__ will be __main__ only if this file is the entry point
if __name__ == '__main__':
    # run the server on this ip and port 50100
    app.run(host='0.0.0.0', port=50100, debug=True)