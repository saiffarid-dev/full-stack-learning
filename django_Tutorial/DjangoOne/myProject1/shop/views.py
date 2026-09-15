from django.http import HttpResponse

def home(request):
    return HttpResponse("Shop Home Page")


def producst(request):
    return HttpResponse("Shop products Page")

def about(request):
    return HttpResponse("Shop About Page")
