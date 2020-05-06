# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models



class Accidente(models.Model):
    k_numaccidente = models.IntegerField(primary_key=True)
    w_ntsbdoc = models.CharField(max_length=100, blank=True, null=True)
    d_conclusion = models.CharField(max_length=500)
    n_heridos = models.IntegerField()
    n_muertos = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'accidente'


class Avion(models.Model):
    k_nommodelo = models.CharField(primary_key=True, max_length=50)
    d_general = models.CharField(max_length=200, blank=True, null=True)
    k_nomfabricante = models.ForeignKey('Fabricante', models.DO_NOTHING, db_column='k_nomfabricante', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'avion'


class Entidad(models.Model):
    k_nomentidad = models.CharField(primary_key=True, max_length=50)
    f_fundacion = models.DateField(blank=True, null=True)
    s_tipo = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'entidad'


class Fabricante(models.Model):
    k_nomfabricante = models.CharField(primary_key=True, max_length=50)
    f_fundacion = models.DateField(blank=True, null=True)
    u_headquarter = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'fabricante'


class Situacion(models.Model):
    k_num = models.IntegerField(primary_key=True)
    un_lat = models.DecimalField(max_digits=8, decimal_places=6)
    un_lon = models.DecimalField(max_digits=9, decimal_places=6)
    u_nomlugar = models.CharField(max_length=30, blank=True, null=True)
    f_hora = models.DateTimeField()
    d_situacion = models.CharField(max_length=200)
    un_altitud = models.IntegerField(blank=True, null=True)
    k_numaccidente = models.ForeignKey(Accidente, related_name='situaciones',on_delete=models.DO_NOTHING, db_column='k_numaccidente')
    iframe = models.CharField(max_length=500)

    class Meta:
        managed = False
        db_table = 'situacion'
        unique_together = (('k_num', 'k_numaccidente'),)


class Vuelo(models.Model):
    k_nomvuelo = models.CharField(primary_key=True, max_length=10)
    f_salida = models.DateTimeField()
    u_ciudadorigen = models.CharField(max_length=50)
    u_ciudaddestino = models.CharField(max_length=50, blank=True, null=True)
    i_registroavion = models.CharField(max_length=6)
    k_nomentidad = models.ForeignKey(Entidad, models.DO_NOTHING,db_column='k_nomentidad', blank=True, null=True)
    k_nommodelo = models.ForeignKey(Avion, models.DO_NOTHING, db_column='k_nommodelo', blank=True, null=True)
    k_numaccidente = models.ForeignKey(Accidente, related_name='vuelos',on_delete=models.DO_NOTHING,db_column='k_numaccidente', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'vuelo'
        unique_together = (('k_nomvuelo', 'f_salida'),)
