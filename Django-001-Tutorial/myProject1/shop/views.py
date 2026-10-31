from django.http import HttpResponse

def home(request):
    return HttpResponse("Shop Home Page")

def products(requests):
    return HttpResponse("Shop Products Page")