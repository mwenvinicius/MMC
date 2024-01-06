from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer

def getRoutes(request):
    return JsonResponse('Hello',safe=False)

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request,pk):
    findProduct = Product.objects.get(_id=pk)
    serializer = ProductSerializer(findProduct,many=False)
    return Response(serializer.data)