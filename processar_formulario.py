import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Configurações do servidor SMTP
smtp_server = 'smtp.gmail.com'
port = 587
sender_email = os.getenv('solamaeslol@gmail.com')
password = os.getenv('xjhi lrdp pygv bzke')

# Destinatário e mensagem
receiver_email = 'mattsnbk@gmail.com'
subject = 'Inscrição Para Diretoria'
body = """
Nome: {}
Cargo: {}
Email: {}
Curso: {}
Motivo: {}
""".format(nome, cargo, email, curso, motivo) 

# Configuração do email
message = MIMEMultipart()
message['From'] = sender_email
message['To'] = receiver_email
message['Subject'] = subject
message.attach(MIMEText(body, 'plain'))

# Conexão com o servidor SMTP
with smtplib.SMTP(smtp_server, port) as server:
    server.starttls()
    server.login(sender_email, password)
    text = message.as_string()
    server.sendmail(sender_email, receiver_email, text)
    server.quit()

print('Email enviado com sucesso!')