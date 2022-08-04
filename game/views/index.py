from django.shortcuts import render #render 在服务端渲染html

def index(request):
    return render(request,"multiends/web.html")
    
