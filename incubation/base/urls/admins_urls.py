from django.urls import path
from base.views import admins_views as views

urlpatterns = [    
    
    path('new_regs/', views.getCompanies, name='view_company'),
    path('new_regs/<str:pk>/', views.registerUpdate, name='addto_pending'),
    path('new_regs/delete/<str:pk>/', views.registerDelete, name='delete'),
    path('new_regs/approve/<str:pk>/', views.registerApprove, name='approve'),
    path('new_regs/approve/<str:pk>/', views.registerApprove, name='approve'),
    path('view/<str:id>/', views.getRegister, name='view'),
    path('book/', views.slots, name='slots'),
    path('book/<str:pk>/', views.getSlot, name='slot_book'),
    path('approved/', views.approvedSlot, name='approved'),
]