from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import redirect, render

PROJECT_NAME = 'Project'

def doThis(request):
    return HttpResponse("Done!")

def openPage(request):
    data ={
        "projectName" : PROJECT_NAME
    }
    return render(request,"home.html", data)

print(PROJECT_NAME)

def headerPage(request):
    return render(request,"header.html")

def aboutUsPage(request):
    return render(request,"about us.html")

def productPage(request):
    return render(request,"products.html")

def signUp(request):
    return render(request,"signUp.html")

def login(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        print(username)
        print(password)
        return HttpResponseRedirect("/products")
    return render(request,"login.html")

def formData(request):
    print("the data has been collected!")
    return HttpResponse("the data has been collected")