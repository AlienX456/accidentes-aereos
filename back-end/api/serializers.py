from api.models import *
from rest_framework import serializers

class EntidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Entidad
        fields = '__all__'

class AvionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Avion
        fields = '__all__'

class FabricanteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fabricante
        fields = '__all__'

class VueloSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vuelo
        fields = '__all__'

class SituacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Situacion
        fields = '__all__'

class AccidenteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accidente
        fields = '__all__'



class InformacionSerializer(serializers.ModelSerializer):
    situaciones = SituacionSerializer(many=True)
    vuelos = VueloSerializer(many=True)

    class Meta:
        model = Accidente
        fields = ['k_numaccidente','w_ntsbdoc','d_conclusion','n_heridos','n_muertos','situaciones','vuelos']
