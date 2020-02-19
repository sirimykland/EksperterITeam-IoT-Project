
#include <ESP8266WiFi.h>
#include <SoftwareSerial.h>
#include <FirebaseArduino.h>
#include <ArduinoJson.h>
#include <ESP8266HTTPClient.h>
 
// Set these to run example.
#define FIREBASE_HOST "https://eit-gruppe1.firebaseio.com/"
#define FIREBASE_AUTH "Jlr3J4sQP3soL4cAhnEvlq6gempua1A0LqGGyqsV"
#define WIFI_SSID "Siri iPhone 2"
#define WIFI_PASSWORD "12345678"
 
String myString;
 
void setup()
{
  // Debug console
  Serial.begin(9600);
  // connect to wifi.
  pinMode(16,OUTPUT);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED)
      {
    Serial.print(".");
    delay(500);
      }
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());
  
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.setString("TestValue/Value","testsetup");
}
 
void loop()
{
 
myString = "hello world"; 
Serial.println(myString); 
Firebase.setString("TestValue/Value",myString);
delay(1000);            
}
