from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from base.models import Register,Slots

class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'is_staff','is_active']

    def get_name(self,obj):
        name = obj.first_name
        if name=='':
            name = obj.email

        return name

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name', 'is_staff', 'token', 'is_active']
    
    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


class RegisterSerializer(serializers.ModelSerializer):
  

    class Meta:
        model = Register
        fields = '__all__'


class RegisterUpdateSerializer(serializers.ModelSerializer):  

    class Meta:
        model = Register
        fields = ['status']
   

class SlotSerializer(serializers.ModelSerializer):
  

    class Meta:
        model = Slots
        fields = '__all__'