from django.shortcuts import render

from datetime import datetime

def blog_list(request):
    blogs = [
        {"title":"Django Basics","is_featured":True, "author":"Ravi Kumar"},
        {"title":"Django Advanced","is_featured":False, "author":"  "},
        {"title":"Django REST Framework","is_featured":False, "author":"Saif Farid"},
    ]
    context = {
        "blogs":blogs,
        "today": datetime.now(),
        "html_code":"<h1>Welcome to My Blog</h1>",
    }
    return render(request, 'blog/blog_list.html', context)