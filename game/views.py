from django.http import HttpResponse

def index(resquest):
    return HttpResponse("我的第一个网页!!!");

def play(resquest):
    line1 = '<h1 style="text-align: center">游戏界面"<h1>'
    return HttpResponse(line1)
