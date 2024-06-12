from django.http import HttpResponse
from django.shortcuts import render

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