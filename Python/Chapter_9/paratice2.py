# create a class Laptop with attributes: brand RAM, price Create 2 object wutg differebt values.

class Laptop: 
    brand = "default"
    RAM = "8GB"
    price = "default 1 lakh"

laptop1 =  Laptop()
laptop1.brand = "Macbook"    # object k method attribute ko chnage kiya  islye class attribute default rakhe 
laptop1.RAM = "16GB"
print("Laptop Brand - ", laptop1.brand)


laptop2 = Laptop()
laptop2.brand = "Lenovo"
print("Laptop Brand - ",  laptop2.brand)
 