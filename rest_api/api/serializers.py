from rest_framework import serializers

class UserSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=100)
    lat = serializers.FloatField()
    lng = serializers.FloatField()