from django.db import models
from django.contrib.auth.models import User

class Product(models.Model):
    _id = models.AutoField(primary_key=True,editable=False)
    user = models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    nome = models.CharField(max_length=200,null=True,blank=True)
    imagem = models.ImageField(null=True,blank=True)
    marca = models.CharField(max_length=200,null=True,blank=True)
    categoria = models.CharField(max_length=200,null=True,blank=True)
    subCategoria = models.CharField(max_length=200,null=True,blank=True)
    # Manual (?)
    codigo = models.CharField(max_length=10,null=True,blank=True)
    # Características (?)
    tipoMed = models.CharField(max_length=200,null=True,blank=True)
    descricao = models.TextField(null=True,blank=True)
    avaliacoes = models.IntegerField(null=True,blank=True,default=0)
    vizualizacoes = models.IntegerField(null=True,blank=True,default=0)
    numAvalia = models.DecimalField(max_digits=7,decimal_places=2,default=0)
    preco = models.DecimalField(max_digits=7,decimal_places=2,null=True,blank=True)
    promo = models.BooleanField(null=True,blank=True,default=False)
    qntEstoque = models.IntegerField(default=0)
    criadoEm = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.nome