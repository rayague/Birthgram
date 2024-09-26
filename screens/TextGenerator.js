import { View, Text } from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const son = [
  {
    id: 1,
    content:
      "My dear son, today we celebrate not only the day of your birth but also every precious moment you have brought into our lives. Your light brightens our days, and your kindness warms our hearts. May this birthday be as special as you are, filled with fulfilled dreams and moments of happiness. I love you more than words can express."
  },
  {
    id: 2,
    content:
      "Happy birthday, my little champion! May this year be filled with precious moments, laughter, and adventures. You are my greatest joy."
  },
  {
    id: 3,
    content:
      "To my beloved son, today we celebrate the wonder that you are. May every day of this new year be a celebration of joy and love."
  },
  {
    id: 4,
    content:
      "My dear son, you are the reason for my smile. May this birthday mark the beginning of a year full of realized dreams and success."
  },
  {
    id: 5,
    content:
      "Happy birthday, my treasure! Your happiness is my priority. May this new year bring you all the love and success you deserve."
  },
  {
    id: 6,
    content:
      "To my son, who lights up my life, I wish you a birthday as radiant as your smile. May each day be a new adventure."
  },
  {
    id: 7,
    content:
      "My beloved son, every moment with you is a precious gift. May this birthday be a celebration of your love and light."
  },
  {
    id: 8,
    content:
      "Happy birthday, my little angel! May this year be filled with laughter, happiness, and all your dreams come true."
  },
  {
    id: 9,
    content:
      "To my cherished son, every day with you is a true blessing. May this birthday be the beginning of a year full of success."
  },
  {
    id: 10,
    content:
      "My dear son, on this special day, I want you to know how much you are loved. May this birthday be a day as wonderful as you are."
  },
  {
    id: 11,
    content:
      "Happy birthday, my treasure! Your joy is contagious. May this new year be filled with love, happiness, and adventures."
  },
  {
    id: 12,
    content:
      "To my son, who is the most beautiful thing in my life, I wish you a birthday full of joy and unforgettable moments."
  },
  {
    id: 13,
    content:
      "My beloved son, every year I am amazed by the incredible person you are becoming. May this birthday be as special as you are."
  },
  {
    id: 14,
    content:
      "Happy birthday, my little joy! May this new year be filled with happiness, love, and success. You are my pride."
  },
  {
    id: 15,
    content:
      "To my son, who is growing up so fast, I wish you a birthday filled with adventures and beautiful surprises. You are a true treasure."
  },
  {
    id: 16,
    content:
      "My dear son, every moment spent with you is a precious gift. May this birthday be a celebration of your life and all the love I have for you."
  },
  {
    id: 17,
    content:
      "Happy birthday, my treasure! May this year be filled with joy, laughter, and all the wonders of life. You are my happiness."
  },
  {
    id: 18,
    content:
      "To my beloved son, each day by your side is an invaluable gift. May this birthday be the start of a magical year full of discoveries."
  },
  {
    id: 19,
    content:
      "My dear son, today we celebrate the day you came into the world. May this birthday be filled with surprises, happiness, and love."
  },
  {
    id: 20,
    content:
      "Happy birthday, my little angel! May this new year be full of happiness, love, and success. You are the light of my life."
  },
  {
    id: 21,
    content:
      "To my son, who is the best gift of my life, I wish you a birthday as magnificent as you are. May every day be a joy."
  },
  {
    id: 22,
    content:
      "My beloved son, each birthday is an opportunity to celebrate the incredible person you are. May this year be filled with success and joy."
  },
  {
    id: 23,
    content:
      "Happy birthday, my little champion! May this year be filled with precious moments, laughter, and adventures. You are my greatest joy."
  },
  {
    id: 24,
    content:
      "To my son, who is the light of my life, I wish you a birthday as bright as your smile. May each day be a new adventure."
  },
  {
    id: 25,
    content:
      "My dear son, every moment with you is a gift. May this birthday be a celebration of your life and the love I have for you."
  },
  {
    id: 26,
    content:
      "Happy birthday, my treasure! May this year be filled with joy, laughter, and all the wonders of life. You are my happiness."
  },
  {
    id: 27,
    content:
      "To my beloved son, each day spent with you is a blessing. May this birthday be the beginning of a year full of joy and success."
  },
  {
    id: 28,
    content:
      "My dear son, today we celebrate the day you came into the world. May this birthday be filled with love and laughter."
  },
  {
    id: 29,
    content:
      "Happy birthday, my little angel! May this year bring you everything you have ever wished for. You are a true gift."
  },
  {
    id: 30,
    content:
      "To my son, who is the best part of my life, I wish you a birthday as beautiful as your heart. May every moment be filled with joy."
  },
  {
    id: 31,
    content:
      "My beloved son, each birthday is a reminder of how much you mean to me. May this year be filled with love and happiness."
  },
  {
    id: 32,
    content:
      "Happy birthday, my little champion! May this year be filled with adventures, laughter, and all the happiness you deserve."
  },
  {
    id: 33,
    content:
      "To my cherished son, may this birthday be a celebration of you and all the joy you bring into our lives."
  },
  {
    id: 34,
    content:
      "My dear son, every year I am amazed by the incredible person you are becoming. May this birthday be as special as you are."
  },
  {
    id: 35,
    content:
      "Happy birthday, my little joy! May this new year be filled with laughter, love, and success. You are my pride."
  },
  {
    id: 36,
    content:
      "To my son, who is growing up so fast, I wish you a birthday filled with adventures and beautiful surprises. You are a true treasure."
  },
  {
    id: 37,
    content:
      "My dear son, every moment spent with you is a precious gift. May this birthday be a celebration of your life and all the love I have for you."
  },
  {
    id: 38,
    content:
      "Happy birthday, my treasure! May this year be filled with joy, laughter, and all the wonders of life. You are my happiness."
  },
  {
    id: 39,
    content:
      "To my beloved son, each day by your side is an invaluable gift. May this birthday be the start of a magical year full of discoveries."
  },
  {
    id: 40,
    content:
      "My dear son, today we celebrate the day you came into the world. May this birthday be filled with surprises, happiness, and love."
  },
  {
    id: 41,
    content:
      "Happy birthday, my little angel! May this new year be full of happiness, love, and success. You are the light of my life."
  },
  {
    id: 42,
    content:
      "To my son, who is the best gift of my life, I wish you a birthday as magnificent as you are. May every day be a joy."
  },
  {
    id: 43,
    content:
      "My beloved son, each birthday is an opportunity to celebrate the incredible person you are. May this year be filled with success and joy."
  },
  {
    id: 44,
    content:
      "Happy birthday, my little champion! May this year be filled with precious moments, laughter, and adventures. You are my greatest joy."
  },
  {
    id: 45,
    content:
      "To my son, who is the light of my life, I wish you a birthday as bright as your smile. May each day be a new adventure."
  },
  {
    id: 46,
    content:
      "My dear son, every moment with you is a gift. May this birthday be a celebration of your life and the love I have for you."
  },
  {
    id: 47,
    content:
      "Happy birthday, my treasure! May this year be filled with joy, laughter, and all the wonders of life. You are my happiness."
  },
  {
    id: 48,
    content:
      "To my beloved son, each day spent with you is a blessing. May this birthday be the beginning of a year full of joy and success."
  },
  {
    id: 49,
    content:
      "My dear son, today we celebrate the day you came into the world. May this birthday be filled with love and laughter."
  },
  {
    id: 50,
    content:
      "Happy birthday, my little angel! May this year bring you everything you have ever wished for. You are a true gift."
  },
  {
    id: 51,
    content:
      "To my son, who is the best part of my life, I wish you a birthday as beautiful as your heart. May every moment be filled with joy."
  },
  {
    id: 52,
    content:
      "My beloved son, each birthday is a reminder of how much you mean to me. May this year be filled with love and happiness."
  },
  {
    id: 53,
    content:
      "Happy birthday, my little champion! May this year be filled with adventures, laughter, and all the happiness you deserve."
  },
  {
    id: 54,
    content:
      "To my cherished son, may this birthday be a celebration of you and all the joy you bring into our lives."
  },
  {
    id: 55,
    content:
      "My dear son, every year I am amazed by the incredible person you are becoming. May this birthday be as special as you are."
  },
  {
    id: 56,
    content:
      "Happy birthday, my little joy! May this new year be filled with laughter, love, and success. You are my pride."
  },
  {
    id: 57,
    content:
      "To my son, who is growing up so fast, I wish you a birthday filled with adventures and beautiful surprises. You are a true treasure."
  },
  {
    id: 58,
    content:
      "My dear son, every moment spent with you is a precious gift. May this birthday be a celebration of your life and all the love I have for you."
  },
  {
    id: 59,
    content:
      "Happy birthday, my treasure! May this year be filled with joy, laughter, and all the wonders of life. You are my happiness."
  },
  {
    id: 60,
    content:
      "To my beloved son, each day by your side is an invaluable gift. May this birthday be the start of a magical year full of discoveries."
  },
  {
    id: 61,
    content:
      "My dear son, today we celebrate the day you came into the world. May this birthday be filled with surprises, happiness, and love."
  },
  {
    id: 62,
    content:
      "Happy birthday, my little angel! May this new year be full of happiness, love, and success. You are the light of my life."
  },
  {
    id: 63,
    content:
      "To my son, who is the best gift of my life, I wish you a birthday as magnificent as you are. May every day be a joy."
  },
  {
    id: 64,
    content:
      "My beloved son, each birthday is an opportunity to celebrate the incredible person you are. May this year be filled with success and joy."
  },
  {
    id: 65,
    content:
      "Happy birthday, my little champion! May this year be filled with precious moments, laughter, and adventures. You are my greatest joy."
  },
  {
    id: 66,
    content:
      "To my son, who is the light of my life, I wish you a birthday as bright as your smile. May each day be a new adventure."
  },
  {
    id: 67,
    content:
      "My dear son, every moment with you is a gift. May this birthday be a celebration of your life and the love I have for you."
  },
  {
    id: 68,
    content:
      "Happy birthday, my treasure! May this year be filled with joy, laughter, and all the wonders of life. You are my happiness."
  },
  {
    id: 69,
    content:
      "To my beloved son, each day spent with you is a blessing. May this birthday be the beginning of a year full of joy and success."
  },
  {
    id: 70,
    content:
      "My dear son, today we celebrate the day you came into the world. May this birthday be filled with love and laughter."
  },
  {
    id: 71,
    content:
      "Happy birthday, my little angel! May this year bring you everything you have ever wished for. You are a true gift."
  },
  {
    id: 72,
    content:
      "To my son, who is the best part of my life, I wish you a birthday as beautiful as your heart. May every moment be filled with joy."
  },
  {
    id: 73,
    content:
      "My beloved son, each birthday is a reminder of how much you mean to me. May this year be filled with love and happiness."
  },
  {
    id: 74,
    content:
      "Happy birthday, my little champion! May this year be filled with adventures, laughter, and all the happiness you deserve."
  },
  {
    id: 75,
    content:
      "To my cherished son, may this birthday be a celebration of you and all the joy you bring into our lives."
  },
  {
    id: 76,
    content:
      "My dear son, every year I am amazed by the incredible person you are becoming. May this birthday be as special as you are."
  },
  {
    id: 77,
    content:
      "Happy birthday, my little joy! May this new year be filled with laughter, love, and success. You are my pride."
  },
  {
    id: 78,
    content:
      "To my son, who is growing up so fast, I wish you a birthday filled with adventures and beautiful surprises. You are a true treasure."
  },
  {
    id: 79,
    content:
      "My dear son, every moment spent with you is a precious gift. May this birthday be a celebration of your life and all the love I have for you."
  },
  {
    id: 80,
    content:
      "Happy birthday, my treasure! May this year be filled with joy, laughter, and all the wonders of life. You are my happiness."
  },
  {
    id: 81,
    content:
      "To my beloved son, each day by your side is an invaluable gift. May this birthday be the start of a magical year full of discoveries."
  },
  {
    id: 82,
    content:
      "My dear son, today we celebrate the day you came into the world. May this birthday be filled with surprises, happiness, and love."
  },
  {
    id: 83,
    content:
      "Happy birthday, my little angel! May this new year be full of happiness, love, and success. You are the light of my life."
  },
  {
    id: 84,
    content:
      "To my son, who is the best gift of my life, I wish you a birthday as magnificent as you are. May every day be a joy."
  },
  {
    id: 85,
    content:
      "My beloved son, each birthday is an opportunity to celebrate the incredible person you are. May this year be filled with success and joy."
  },
  {
    id: 86,
    content:
      "Happy birthday, my little champion! May this year be filled with precious moments, laughter, and adventures. You are my greatest joy."
  },
  {
    id: 87,
    content:
      "To my son, who is the light of my life, I wish you a birthday as bright as your smile. May each day be a new adventure."
  },
  {
    id: 88,
    content:
      "My dear son, every moment with you is a gift. May this birthday be a celebration of your life and the love I have for you."
  },
  {
    id: 89,
    content:
      "Happy birthday, my treasure! May this year be filled with joy, laughter, and all the wonders of life. You are my happiness."
  },
  {
    id: 90,
    content:
      "To my beloved son, each day spent with you is a blessing. May this birthday be the beginning of a year full of joy and success."
  },
  {
    id: 91,
    content:
      "My dear son, today we celebrate the day you came into the world. May this birthday be filled with love and laughter."
  },
  {
    id: 92,
    content:
      "Happy birthday, my little angel! May this year bring you everything you have ever wished for. You are a true gift."
  },
  {
    id: 93,
    content:
      "To my son, who is the best part of my life, I wish you a birthday as beautiful as your heart. May every moment be filled with joy."
  },
  {
    id: 94,
    content:
      "My beloved son, each birthday is a reminder of how much you mean to me. May this year be filled with love and happiness."
  },
  {
    id: 95,
    content:
      "Happy birthday, my little champion! May this year be filled with adventures, laughter, and all the happiness you deserve."
  },
  {
    id: 96,
    content:
      "To my cherished son, may this birthday be a celebration of you and all the joy you bring into our lives."
  },
  {
    id: 97,
    content:
      "My dear son, every year I am amazed by the incredible person you are becoming. May this birthday be as special as you are."
  },
  {
    id: 98,
    content:
      "Happy birthday, my little joy! May this new year be filled with laughter, love, and success. You are my pride."
  },
  {
    id: 99,
    content:
      "To my son, who is growing up so fast, I wish you a birthday filled with adventures and beautiful surprises. You are a true treasure."
  },
  {
    id: 100,
    content:
      "My dear son, every moment spent with you is a precious gift. May this birthday be a celebration of your life and all the love I have for you."
  },

  {
    id: 101,
    content:
      "Happy birthday, my little star! Your presence lights up my life in ways I cannot describe. May your day be filled with laughter and joy, just like you bring to everyone around you."
  },
  {
    id: 102,
    content:
      "To my dear son, every year that passes is a new chapter in your incredible story. May this birthday bring you closer to your dreams and fill your heart with happiness."
  },
  {
    id: 103,
    content:
      "Happy birthday, my precious boy! You are the reason I believe in magic. May your life be filled with enchanting moments and endless love."
  },
  {
    id: 104,
    content:
      "My son, on this special day, I want to remind you of how much you are loved. You are a blessing to us all. May your birthday be filled with cherished memories."
  },
  {
    id: 105,
    content:
      "Wishing you a fabulous birthday, my son! May each moment today be as wonderful as you are, and may all your dreams come true."
  },
  {
    id: 106,
    content:
      "To my wonderful son, your laughter is the music of my heart. May your birthday be filled with the joy and happiness you bring to everyone."
  },
  {
    id: 107,
    content:
      "Happy birthday, my little hero! You inspire me every day with your kindness and strength. May this year bring you new adventures and dreams fulfilled."
  },
  {
    id: 108,
    content:
      "My dear son, on your birthday, I celebrate you and all the joy you bring into my life. May this year be the best one yet, filled with love and laughter."
  },
  {
    id: 109,
    content:
      "Happy birthday, my shining light! You have the ability to make everyone around you smile. May your special day be filled with all the love you deserve."
  },
  {
    id: 110,
    content:
      "To my son, every birthday reminds me of how blessed I am to have you in my life. May your journey ahead be filled with success and happiness."
  },
  {
    id: 111,
    content:
      "Wishing you the happiest of birthdays, my son! May your heart be filled with joy, and may you find beauty in every moment of your special day."
  },
  {
    id: 112,
    content:
      "My dear son, you are my pride and joy. May this birthday be a celebration of the incredible person you are, and may all your dreams come true."
  },
  {
    id: 113,
    content:
      "Happy birthday, my little wonder! Your spirit brings so much joy to our lives. May this year be filled with new adventures and unforgettable moments."
  },
  {
    id: 114,
    content:
      "To my beloved son, you have a heart of gold. May your birthday be filled with all the love and happiness that you give to others."
  },
  {
    id: 115,
    content:
      "Happy birthday, my amazing boy! May each moment today be a reflection of your beautiful soul and may all your wishes come true."
  },
  {
    id: 116,
    content:
      "My dear son, as you celebrate another year of life, know that you are cherished beyond measure. May this birthday be filled with laughter and love."
  },
  {
    id: 117,
    content:
      "Wishing you a birthday full of magic and wonder, my son! Your dreams are worth chasing, and I hope this year brings you closer to them."
  },
  {
    id: 118,
    content:
      "Happy birthday to my little prince! Your smile brightens my days, and I am so grateful for you. May this year be as special as you are."
  },
  {
    id: 119,
    content:
      "To my son, who brings joy to my heart, I wish you a fantastic birthday filled with moments that make you smile and memories that last a lifetime."
  },
  {
    id: 120,
    content:
      "Happy birthday, my sweet boy! May your heart be filled with joy today and always, and may your dreams take flight."
  },
  {
    id: 121,
    content:
      "My dear son, you are a blessing in my life. May your birthday be filled with the warmth of love and the joy of cherished moments."
  },
  {
    id: 122,
    content:
      "Wishing you a very happy birthday, my son! May this year bring you endless opportunities and all the happiness your heart can hold."
  },
  {
    id: 123,
    content:
      "Happy birthday, my little superstar! Your laughter is music to my ears. May your day be filled with joy, love, and everything you wish for."
  },
  {
    id: 124,
    content:
      "To my beloved son, may this birthday be the beginning of a wonderful year for you. You deserve all the happiness in the world."
  },
  {
    id: 125,
    content:
      "My dear son, as you celebrate your birthday, know that you are loved more than you can imagine. May your day be as special as you are."
  },
  {
    id: 126,
    content:
      "Happy birthday, my little joy! You have a wonderful spirit that inspires everyone around you. May this year be full of adventures and laughter."
  },
  {
    id: 127,
    content:
      "To my son, you are my pride and joy. May your birthday be filled with everything that brings you happiness."
  },
  {
    id: 128,
    content:
      "Wishing you a fabulous birthday, my son! May each moment today be as amazing as you are, and may your dreams come true."
  },
  {
    id: 129,
    content:
      "Happy birthday, my little miracle! Your presence brings so much joy into my life. May your day be filled with love and laughter."
  },
  {
    id: 130,
    content:
      "My dear son, every year with you is a blessing. May your birthday be filled with happiness and all the things you love."
  },
  {
    id: 131,
    content:
      "Happy birthday to my shining star! Your light brightens my world, and I am grateful for every moment we share."
  },
  {
    id: 132,
    content:
      "To my beloved son, may your birthday be a celebration of you and all the joy you bring into our lives."
  },
  {
    id: 133,
    content:
      "Wishing you a happy birthday, my little adventurer! May this year be filled with exciting journeys and wonderful discoveries."
  },
  {
    id: 134,
    content:
      "Happy birthday, my sweet boy! You are a true gift to everyone around you. May your day be filled with joy and love."
  },
  {
    id: 135,
    content:
      "My dear son, today we celebrate the incredible person you are. May this birthday bring you all the happiness in the world."
  },
  {
    id: 136,
    content:
      "To my son, you are the light of my life. May your birthday be filled with laughter, love, and unforgettable moments."
  },
  {
    id: 137,
    content:
      "Happy birthday, my little hero! Your kindness and strength inspire me every day. May this year bring you new adventures."
  },
  {
    id: 138,
    content:
      "Wishing you a fantastic birthday, my son! May your heart be filled with joy and your dreams come true."
  },
  {
    id: 139,
    content:
      "My dear son, on your birthday, I want you to know how much you are loved. May this day be as special as you are."
  },
  {
    id: 140,
    content:
      "Happy birthday to my little prince! Your smile brightens my days. May this year bring you all the happiness you deserve."
  },
  {
    id: 141,
    content:
      "To my beloved son, you are a blessing in my life. May your birthday be filled with joy, laughter, and all the love in the world."
  },
  {
    id: 142,
    content:
      "Wishing you a birthday full of love and happiness, my son! You are my greatest joy."
  },
  {
    id: 143,
    content:
      "Happy birthday, my little wonder! May your day be filled with magical moments and cherished memories."
  },
  {
    id: 144,
    content:
      "My dear son, today we celebrate you! May your birthday be filled with laughter, joy, and everything you love."
  },
  {
    id: 145,
    content:
      "To my son, who fills my heart with joy, I wish you a birthday as wonderful as you are. May all your dreams come true."
  },
  {
    id: 146,
    content:
      "Happy birthday, my little star! Your light shines brightly in our lives. May your day be filled with joy and laughter."
  },
  {
    id: 147,
    content:
      "Wishing you a very happy birthday, my son! May this year bring you happiness, love, and all the adventures your heart desires."
  },
  {
    id: 148,
    content:
      "To my dear son, you are a true blessing. May your birthday be a day of joy, laughter, and unforgettable moments."
  },
  {
    id: 149,
    content:
      "Happy birthday, my sweet boy! Your laughter is the music of my heart. May this year be filled with love and happiness."
  },
  {
    id: 150,
    content:
      "My dear son, as you celebrate another year of life, know that you are cherished beyond measure. May your birthday be filled with joy."
  },
  {
    id: 151,
    content:
      "Wishing you a birthday full of magic and wonder, my son! You have the ability to make everyone smile."
  },
  {
    id: 152,
    content:
      "Happy birthday to my little hero! You inspire me every day with your kindness. May this year bring you new adventures."
  },
  {
    id: 153,
    content:
      "To my beloved son, may this birthday be a celebration of you and all the joy you bring into our lives."
  },
  {
    id: 154,
    content:
      "My dear son, you are my pride and joy. May your birthday be filled with everything that brings you happiness."
  },
  {
    id: 155,
    content:
      "Happy birthday, my little miracle! Your presence brings so much joy into my life. May your day be filled with love."
  }
];

const brother = [
  {
    id: 1,
    content:
      "Happy birthday to my amazing brother! Your strength and support are invaluable. May this year bring you everything you desire."
  },
  {
    id: 2,
    content:
      "Wishing you a fantastic birthday, dear brother! You are not just my sibling but also my greatest ally. Enjoy your special day to the fullest!"
  },
  {
    id: 3,
    content:
      "Happy birthday to the coolest brother ever! Your adventurous spirit inspires me every day. May your year be filled with thrilling experiences!"
  },
  {
    id: 4,
    content:
      "To my brother on your special day: Thank you for always being there for me. May this birthday bring you immense joy and laughter."
  },
  {
    id: 5,
    content:
      "Happy birthday, bro! Your wisdom and kindness shine bright. Wishing you all the happiness in the world today and always."
  },
  {
    id: 6,
    content:
      "Cheers to my brother on his birthday! You are a true gift to our family. May your day be as awesome as you are."
  },
  {
    id: 7,
    content:
      "Happy birthday, brother! Your courage and determination inspire me every day. May this year be filled with success and fulfillment."
  },
  {
    id: 8,
    content:
      "To my incredible brother: Happy birthday! May your journey ahead be filled with adventures, love, and happiness."
  },
  {
    id: 9,
    content:
      "Wishing you a wonderful birthday, dear brother! Your laughter lights up our lives. May your day be filled with joy and cheer."
  },
  {
    id: 10,
    content:
      "Happy birthday to my brother! Your resilience and strength are admirable. May this year bring you closer to your dreams."
  },
  {
    id: 11,
    content:
      "Cheers to my brother on his special day! Your kindness and compassion are unmatched. Wishing you a year full of blessings."
  },
  {
    id: 12,
    content:
      "Happy birthday, bro! Your unique perspective on life is refreshing. May you continue to inspire those around you."
  },
  {
    id: 13,
    content:
      "To my brother: Happy birthday! Your adventurous spirit and zest for life are contagious. Enjoy every moment of your special day!"
  },
  {
    id: 14,
    content:
      "Wishing you a fantastic birthday, brother! May this year bring you endless opportunities and adventures."
  },
  {
    id: 15,
    content:
      "Happy birthday to the best brother ever! Your unwavering support means the world to me. Have an amazing day!"
  },
  {
    id: 16,
    content:
      "Cheers to my brother on his birthday! You are a true blessing in my life. May your day be filled with love and laughter."
  },
  {
    id: 17,
    content:
      "Happy birthday, dear brother! Your strength and perseverance inspire me every day. Wishing you all the best today and always."
  },
  {
    id: 18,
    content:
      "To my amazing brother: Happy birthday! May your day be filled with joy, and your year ahead be full of accomplishments."
  },
  {
    id: 19,
    content:
      "Wishing you a wonderful birthday, brother! Your humor and spirit bring happiness to everyone around you."
  },
  {
    id: 20,
    content:
      "Happy birthday, bro! Your dedication and passion are truly inspiring. May this year be your best one yet!"
  },
  {
    id: 21,
    content:
      "To my brother on your special day: Your love and support have shaped who I am today. Have a fantastic birthday!"
  },
  {
    id: 22,
    content:
      "Cheers to you on your birthday, brother! Your adventurous spirit lights up our lives. Enjoy every moment!"
  },
  {
    id: 23,
    content:
      "Happy birthday to my wonderful brother! Your laughter and joy are infectious. Wishing you all the happiness in the world."
  },
  {
    id: 24,
    content:
      "Wishing you a fabulous birthday, brother! Your strength and wisdom are a guiding light in my life."
  },
  {
    id: 25,
    content:
      "Happy birthday, dear brother! Your determination and courage are an inspiration to us all. Enjoy your special day!"
  },
  {
    id: 26,
    content:
      "To my brother: Happy birthday! May this year bring you closer to your dreams and fill your life with joy."
  },
  {
    id: 27,
    content:
      "Cheers to my brother on his birthday! Your friendship means everything to me. Have a day filled with joy and laughter."
  },
  {
    id: 28,
    content:
      "Happy birthday to my amazing brother! Your kind heart and spirit brighten every room you enter."
  },
  {
    id: 29,
    content:
      "Wishing you a wonderful birthday, brother! May your day be as fantastic as you are."
  },
  {
    id: 30,
    content:
      "Happy birthday, bro! Your adventurous spirit inspires me to be better. Enjoy your special day to the fullest!"
  },
  {
    id: 31,
    content:
      "To my brother on your birthday: Thank you for always being there for me. May your day be filled with love and happiness."
  },
  {
    id: 32,
    content:
      "Cheers to you on your special day, brother! Your strength and determination are truly admirable."
  },
  {
    id: 33,
    content:
      "Happy birthday to the best brother! Your laughter brings joy to everyone around you. Enjoy your day!"
  },
  {
    id: 34,
    content:
      "Wishing you a fabulous birthday, dear brother! Your resilience and kindness inspire everyone you meet."
  },
  {
    id: 35,
    content:
      "Happy birthday, brother! Your passion for life is contagious. May your year ahead be filled with excitement."
  },
  {
    id: 36,
    content:
      "To my amazing brother: Happy birthday! May your journey ahead be filled with love, laughter, and happiness."
  },
  {
    id: 37,
    content:
      "Cheers to my brother on his birthday! Your spirit and determination make the world a better place."
  },
  {
    id: 38,
    content:
      "Happy birthday, dear brother! Your support and love mean the world to me. Have an incredible day!"
  },
  {
    id: 39,
    content:
      "Wishing you a wonderful birthday, brother! Your unique personality lights up our lives."
  },
  {
    id: 40,
    content:
      "Happy birthday, bro! Your strength and wisdom are an inspiration. May your day be filled with joy."
  },
  {
    id: 41,
    content:
      "To my brother on your special day: Thank you for being a constant source of support. Enjoy every moment!"
  },
  {
    id: 42,
    content:
      "Cheers to my brother on his birthday! Your adventurous nature is a blessing to our family."
  },
  {
    id: 43,
    content:
      "Happy birthday to my wonderful brother! Your laughter and joy are a gift to everyone around you."
  },
  {
    id: 44,
    content:
      "Wishing you a fabulous birthday, brother! Your strength and determination inspire us all."
  },
  {
    id: 45,
    content:
      "Happy birthday, dear brother! May this year bring you endless opportunities and happiness."
  },
  {
    id: 46,
    content:
      "To my brother: Happy birthday! Your love and support have shaped who I am today. Have an amazing day!"
  },
  {
    id: 47,
    content:
      "Cheers to you on your birthday, brother! Your adventurous spirit lights up our lives. Enjoy every moment!"
  },
  {
    id: 48,
    content:
      "Happy birthday to my amazing brother! Your kind heart and spirit brighten every room you enter."
  },
  {
    id: 49,
    content:
      "Wishing you a wonderful birthday, brother! May your day be as fantastic as you are."
  },
  {
    id: 50,
    content:
      "Happy birthday, bro! Your adventurous spirit inspires me to be better. Enjoy your special day to the fullest!"
  },
  {
    id: 51,
    content:
      "To my brother on your birthday: Thank you for always being there for me. May your day be filled with love and happiness."
  },
  {
    id: 52,
    content:
      "Cheers to you on your special day, brother! Your strength and determination are truly admirable."
  },
  {
    id: 53,
    content:
      "Happy birthday to the best brother! Your laughter brings joy to everyone around you. Enjoy your day!"
  },
  {
    id: 54,
    content:
      "Wishing you a fabulous birthday, dear brother! Your resilience and kindness inspire everyone you meet."
  },
  {
    id: 55,
    content:
      "Happy birthday, brother! Your passion for life is contagious. May your year ahead be filled with excitement."
  },
  {
    id: 56,
    content:
      "To my amazing brother: Happy birthday! May your journey ahead be filled with love, laughter, and happiness."
  },
  {
    id: 57,
    content:
      "Cheers to my brother on his birthday! Your spirit and determination make the world a better place."
  },
  {
    id: 58,
    content:
      "Happy birthday, dear brother! Your support and love mean the world to me. Have an incredible day!"
  },
  {
    id: 59,
    content:
      "Wishing you a wonderful birthday, brother! Your unique personality lights up our lives."
  },
  {
    id: 60,
    content:
      "Happy birthday, bro! Your strength and wisdom are an inspiration. May your day be filled with joy."
  },
  {
    id: 61,
    content:
      "To my brother on your special day: Thank you for being a constant source of support. Enjoy every moment!"
  },
  {
    id: 62,
    content:
      "Cheers to my brother on his birthday! Your adventurous nature is a blessing to our family."
  },
  {
    id: 63,
    content:
      "Happy birthday to my wonderful brother! Your laughter and joy are a gift to everyone around you."
  },
  {
    id: 64,
    content:
      "Wishing you a fabulous birthday, brother! Your strength and determination inspire us all."
  },
  {
    id: 65,
    content:
      "Happy birthday, dear brother! May this year bring you endless opportunities and happiness."
  },
  {
    id: 66,
    content:
      "To my brother: Happy birthday! Your love and support have shaped who I am today. Have an amazing day!"
  },
  {
    id: 67,
    content:
      "Cheers to you on your birthday, brother! Your adventurous spirit lights up our lives. Enjoy every moment!"
  },
  {
    id: 68,
    content:
      "Happy birthday to my amazing brother! Your kind heart and spirit brighten every room you enter."
  },
  {
    id: 69,
    content:
      "Wishing you a wonderful birthday, brother! May your day be as fantastic as you are."
  },
  {
    id: 70,
    content:
      "Happy birthday, bro! Your adventurous spirit inspires me to be better. Enjoy your special day to the fullest!"
  },
  {
    id: 71,
    content:
      "To my brother on your birthday: Thank you for always being there for me. May your day be filled with love and happiness."
  },
  {
    id: 72,
    content:
      "Cheers to you on your special day, brother! Your strength and determination are truly admirable."
  },
  {
    id: 73,
    content:
      "Happy birthday to the best brother! Your laughter brings joy to everyone around you. Enjoy your day!"
  },
  {
    id: 74,
    content:
      "Wishing you a fabulous birthday, dear brother! Your resilience and kindness inspire everyone you meet."
  },
  {
    id: 75,
    content:
      "Happy birthday, brother! Your passion for life is contagious. May your year ahead be filled with excitement."
  },
  {
    id: 76,
    content:
      "To my amazing brother: Happy birthday! May your journey ahead be filled with love, laughter, and happiness."
  },
  {
    id: 77,
    content:
      "Cheers to my brother on his birthday! Your spirit and determination make the world a better place."
  },
  {
    id: 78,
    content:
      "Happy birthday, dear brother! Your support and love mean the world to me. Have an incredible day!"
  },
  {
    id: 79,
    content:
      "Wishing you a wonderful birthday, brother! Your unique personality lights up our lives."
  },
  {
    id: 80,
    content:
      "Happy birthday, bro! Your strength and wisdom are an inspiration. May your day be filled with joy."
  },
  {
    id: 81,
    content:
      "To my brother on your special day: Thank you for being a constant source of support. Enjoy every moment!"
  },
  {
    id: 82,
    content:
      "Cheers to my brother on his birthday! Your adventurous nature is a blessing to our family."
  },
  {
    id: 83,
    content:
      "Happy birthday to my wonderful brother! Your laughter and joy are a gift to everyone around you."
  },
  {
    id: 84,
    content:
      "Wishing you a fabulous birthday, brother! Your strength and determination inspire us all."
  },
  {
    id: 85,
    content:
      "Happy birthday, dear brother! May this year bring you endless opportunities and happiness."
  },
  {
    id: 86,
    content:
      "To my brother: Happy birthday! Your love and support have shaped who I am today. Have an amazing day!"
  },
  {
    id: 87,
    content:
      "Cheers to you on your birthday, brother! Your adventurous spirit lights up our lives. Enjoy every moment!"
  },
  {
    id: 88,
    content:
      "Happy birthday to my amazing brother! Your kind heart and spirit brighten every room you enter."
  },
  {
    id: 89,
    content:
      "Wishing you a wonderful birthday, brother! May your day be as fantastic as you are."
  },
  {
    id: 90,
    content:
      "Happy birthday, bro! Your adventurous spirit inspires me to be better. Enjoy your special day to the fullest!"
  },
  {
    id: 91,
    content:
      "To my brother on your birthday: Thank you for always being there for me. May your day be filled with love and happiness."
  },
  {
    id: 92,
    content:
      "Cheers to you on your special day, brother! Your strength and determination are truly admirable."
  },
  {
    id: 93,
    content:
      "Happy birthday to the best brother! Your laughter brings joy to everyone around you. Enjoy your day!"
  },
  {
    id: 94,
    content:
      "Wishing you a fabulous birthday, dear brother! Your resilience and kindness inspire everyone you meet."
  },
  {
    id: 95,
    content:
      "Happy birthday, brother! Your passion for life is contagious. May your year ahead be filled with excitement."
  },
  {
    id: 96,
    content:
      "To my amazing brother: Happy birthday! May your journey ahead be filled with love, laughter, and happiness."
  },
  {
    id: 97,
    content:
      "Cheers to my brother on his birthday! Your spirit and determination make the world a better place."
  },
  {
    id: 98,
    content:
      "Happy birthday, dear brother! Your support and love mean the world to me. Have an incredible day!"
  },
  {
    id: 99,
    content:
      "Wishing you a wonderful birthday, brother! Your unique personality lights up our lives."
  },
  {
    id: 100,
    content:
      "Happy birthday, bro! Your strength and wisdom are an inspiration. May your day be filled with joy."
  }
];

const daughter = [
  {
    id: 1,
    content:
      "My dear daughter, on this special day, I celebrate you and the joy you bring into our lives. Your laughter is like music, and your dreams inspire us all. May this birthday be filled with love, happiness, and countless adventures. Remember, you are cherished beyond measure."
  },
  {
    id: 2,
    content:
      "Happy birthday to my wonderful daughter! You are the light of our family, and your kindness touches everyone around you. As you grow older, may you continue to chase your dreams with passion and never forget how loved you are. Enjoy your special day to the fullest!"
  },
  {
    id: 3,
    content:
      "To my sweet daughter, today we celebrate the beautiful person you are and all the wonderful things you will become. Your heart is pure, and your spirit is bright. I wish you a birthday filled with love, laughter, and unforgettable moments. You deserve the world!"
  },
  {
    id: 4,
    content:
      "Happy birthday, my precious daughter! You have a gift for bringing joy into our lives, and I am so grateful for every moment we share. May your birthday be as fantastic as you are, filled with love, laughter, and all your favorite things."
  },
  {
    id: 5,
    content:
      "To my beloved daughter, today we celebrate you and all the joy you bring to our lives. Your strength, creativity, and passion are a source of inspiration. May this birthday bring you all the happiness your heart desires and more."
  },
  {
    id: 6,
    content:
      "Happy birthday to my amazing daughter! Watching you grow has been one of my greatest joys. May this year bring you closer to your dreams and fill your life with love, laughter, and adventure. You are truly special!"
  },
  {
    id: 7,
    content:
      "On your special day, my dear daughter, I want you to know how incredibly proud I am of you. Your courage and determination shine brightly. May your birthday be filled with sweet surprises and all the love in the world."
  },
  {
    id: 8,
    content:
      "Happy birthday, my lovely daughter! You have a heart of gold and a smile that lights up the room. I hope this day is as wonderful as you are, filled with laughter, love, and beautiful memories."
  },
  {
    id: 9,
    content:
      "To my daughter, as you celebrate another year, remember that you are loved more than you will ever know. May your birthday be a magical day, full of dreams coming true and surrounded by all those who adore you."
  },
  {
    id: 10,
    content:
      "Happy birthday to my sweet daughter! Your laughter fills our home with happiness, and your dreams inspire us all. May this year bring you closer to your goals and fill your life with joy and love."
  },
  {
    id: 11,
    content:
      "On this beautiful day, we celebrate you, my daughter. You have a unique spark that brightens our lives. May your birthday be filled with joy, adventure, and all the things you love the most."
  },
  {
    id: 12,
    content:
      "Happy birthday, my dear daughter! You are a true blessing in my life. I hope today brings you all the happiness you bring to others. Celebrate yourself and enjoy every moment!"
  },
  {
    id: 13,
    content:
      "To my amazing daughter, may this birthday be as incredible as you are! Your heart is full of kindness, and your spirit is vibrant. I wish you a day filled with love, laughter, and endless possibilities."
  },
  {
    id: 14,
    content:
      "Happy birthday to my beautiful daughter! You are the reason for my smiles and my inspiration. May your special day be surrounded by love and filled with everything your heart desires."
  },
  {
    id: 15,
    content:
      "On your birthday, my sweet daughter, I want you to know how special you are to me. Your passion and creativity inspire everyone around you. May this year bring you happiness and endless opportunities."
  },
  {
    id: 16,
    content:
      "Happy birthday, my dear daughter! Your laughter is like music to my ears, and your happiness is my greatest treasure. May this day be filled with love, joy, and all your favorite things."
  },
  {
    id: 17,
    content:
      "To my lovely daughter, may your birthday be as bright as your smile! Your spirit is contagious, and you bring so much joy to our lives. I hope this year brings you closer to your dreams."
  },
  {
    id: 18,
    content:
      "Happy birthday to my incredible daughter! Watching you grow has been the greatest joy of my life. May this special day be filled with love, laughter, and beautiful memories."
  },
  {
    id: 19,
    content:
      "On your birthday, my beloved daughter, I wish you all the happiness in the world. Your kindness and generosity inspire everyone around you. May this year be your best yet!"
  },
  {
    id: 20,
    content:
      "Happy birthday, my sweet daughter! Your heart is full of love, and your dreams are limitless. May this special day bring you all the joy you bring to our lives."
  },
  {
    id: 21,
    content:
      "To my wonderful daughter, may your birthday be a reflection of the incredible person you are. You deserve all the happiness in the world, and I hope this year brings you closer to your dreams."
  },
  {
    id: 22,
    content:
      "Happy birthday to my amazing daughter! Your spirit shines bright, and your laughter fills our home with joy. May this day be as special as you are, filled with love and happiness."
  },
  {
    id: 23,
    content:
      "On your birthday, my dear daughter, I want to remind you of how loved you are. Your kindness and determination inspire me every day. May this year bring you closer to your dreams and fill your life with happiness."
  },
  {
    id: 24,
    content:
      "Happy birthday, my lovely daughter! You are a blessing in my life, and I cherish every moment we share. May this day be filled with love, laughter, and everything you adore."
  },
  {
    id: 25,
    content:
      "To my beautiful daughter, may your birthday be filled with magic and joy! Your dreams are within reach, and I believe in you wholeheartedly. Enjoy this special day to the fullest!"
  },
  {
    id: 26,
    content:
      "Happy birthday to my sweet daughter! Your smile lights up my world, and your kindness touches everyone you meet. May this day be as wonderful as you are, filled with love and laughter."
  },
  {
    id: 27,
    content:
      "On your birthday, my dear daughter, I want you to know how proud I am of you. Your strength and determination inspire me every day. May this year bring you closer to your dreams and fill your life with joy."
  },
  {
    id: 28,
    content:
      "Happy birthday, my incredible daughter! You are a source of joy and inspiration in my life. May this special day be filled with love, laughter, and unforgettable memories."
  },
  {
    id: 29,
    content:
      "To my beloved daughter, may your birthday be a day of celebration and joy! Your spirit shines bright, and I hope this year brings you closer to your dreams."
  },
  {
    id: 30,
    content:
      "Happy birthday to my amazing daughter! Your laughter fills our home with joy, and your dreams inspire us all. May this year bring you happiness and countless adventures."
  },
  {
    id: 31,
    content:
      "On your special day, my dear daughter, I want you to remember how loved you are. Your kindness and creativity inspire everyone around you. May this birthday be filled with sweet surprises."
  },
  {
    id: 32,
    content:
      "Happy birthday, my precious daughter! You are the light of my life, and I am grateful for every moment we share. May this day be as special as you are, filled with love and laughter."
  },
  {
    id: 33,
    content:
      "To my wonderful daughter, may your birthday be a reflection of the beautiful person you are. You deserve all the happiness in the world. Enjoy every moment of your special day!"
  },
  {
    id: 34,
    content:
      "Happy birthday to my lovely daughter! Your smile brightens my day, and your laughter is music to my ears. May this year be filled with love, adventure, and all your dreams coming true."
  },
  {
    id: 35,
    content:
      "On your birthday, my dear daughter, I want to remind you of how proud I am of the person you are becoming. Your kindness and determination inspire me every day. May this year bring you joy and success."
  },
  {
    id: 36,
    content:
      "Happy birthday, my sweet daughter! You have a unique spirit that brightens our lives. May this day be filled with love, laughter, and all the things you cherish the most."
  },
  {
    id: 37,
    content:
      "To my incredible daughter, may your birthday be a day of celebration and joy! Your strength and creativity inspire everyone around you. Enjoy every moment of this special day."
  },
  {
    id: 38,
    content:
      "Happy birthday to my beautiful daughter! You are a gift to our family, and your laughter fills our hearts with happiness. May this year bring you closer to your dreams and fill your life with love."
  },
  {
    id: 39,
    content:
      "On your special day, my dear daughter, I wish you all the happiness in the world. Your kindness and generosity inspire everyone around you. May this birthday be filled with sweet surprises and unforgettable moments."
  },
  {
    id: 40,
    content:
      "Happy birthday, my lovely daughter! Your heart is full of love, and your spirit shines bright. May this day be as wonderful as you are, filled with laughter, love, and adventure."
  },
  {
    id: 41,
    content:
      "To my sweet daughter, may your birthday be a reflection of the beautiful person you are. Your kindness and strength inspire everyone around you. I hope this year brings you happiness and success."
  },
  {
    id: 42,
    content:
      "Happy birthday to my amazing daughter! Your laughter fills our home with joy, and your dreams inspire us all. May this year be filled with love, adventure, and unforgettable memories."
  },
  {
    id: 43,
    content:
      "On your birthday, my dear daughter, I want to remind you of how loved you are. Your spirit shines bright, and your kindness touches everyone you meet. Enjoy every moment of your special day!"
  },
  {
    id: 44,
    content:
      "Happy birthday, my incredible daughter! You have a unique spark that lights up our lives. May this year bring you closer to your dreams and fill your life with love and laughter."
  },
  {
    id: 45,
    content:
      "To my beloved daughter, may your birthday be a day of joy and celebration! Your kindness and creativity inspire everyone around you. Enjoy this special day to the fullest!"
  },
  {
    id: 46,
    content:
      "Happy birthday to my beautiful daughter! You are the heart of our family, and your laughter fills our home with happiness. May this year bring you closer to your dreams and fill your life with love."
  },
  {
    id: 47,
    content:
      "On your special day, my dear daughter, I want to remind you of how special you are to me. Your passion and determination inspire everyone around you. May this birthday be filled with joy and adventure."
  },
  {
    id: 48,
    content:
      "Happy birthday, my lovely daughter! You have a heart of gold and a smile that lights up the room. May this day be as wonderful as you are, filled with love, laughter, and beautiful memories."
  },
  {
    id: 49,
    content:
      "To my sweet daughter, may your birthday be a reflection of the incredible person you are. Your kindness and strength inspire everyone around you. Enjoy every moment of this special day."
  },
  {
    id: 50,
    content:
      "Happy birthday to my amazing daughter! Your spirit shines bright, and your laughter fills our home with joy. May this year bring you happiness and countless adventures."
  },
  {
    id: 51,
    content:
      "Happy birthday, my dear daughter! You have a unique way of brightening our lives, and your dreams inspire everyone around you. May your special day be filled with love, joy, and everything your heart desires."
  },
  {
    id: 52,
    content:
      "To my lovely daughter, on your birthday, I want you to know how cherished you are. Your kindness and creativity touch everyone you meet. May this year bring you happiness and fulfillment."
  },
  {
    id: 53,
    content:
      "Happy birthday to my beautiful daughter! Your laughter is a melody that fills our hearts with joy. May this day be as special as you are, surrounded by love and cherished moments."
  },
  {
    id: 54,
    content:
      "On your birthday, my sweet daughter, I wish you all the happiness in the world. Your spirit shines brightly, and your kindness inspires everyone around you. Enjoy every moment of your special day!"
  },
  {
    id: 55,
    content:
      "Happy birthday, my amazing daughter! You have a heart full of dreams and a spirit that lights up our lives. May this year bring you closer to all that you desire."
  },
  {
    id: 56,
    content:
      "To my precious daughter, today we celebrate the joy you bring to our lives. Your kindness and passion are a blessing. May your birthday be filled with love and beautiful memories."
  },
  {
    id: 57,
    content:
      "Happy birthday to my wonderful daughter! Your smile brightens my day, and your laughter is a joy to behold. May this year be filled with adventures and everything you love."
  },
  {
    id: 58,
    content:
      "On your special day, my dear daughter, I want to remind you how special you are. Your strength and kindness inspire everyone around you. May your birthday be as incredible as you are."
  },
  {
    id: 59,
    content:
      "Happy birthday, my lovely daughter! You are a shining star in our lives, and I am grateful for every moment we share. May this year be filled with love and wonderful experiences."
  },
  {
    id: 60,
    content:
      "To my sweet daughter, may your birthday be filled with joy and laughter! Your heart is full of love, and your dreams are boundless. Enjoy every moment of your special day."
  },
  {
    id: 61,
    content:
      "Happy birthday to my beautiful daughter! Your laughter fills our home with happiness, and your dreams inspire us all. May this day be as special as you are, filled with love and joy."
  },
  {
    id: 62,
    content:
      "On your birthday, my dear daughter, I want to remind you how loved you are. Your kindness and generosity shine brightly. May this year bring you closer to your dreams and fill your life with happiness."
  },
  {
    id: 63,
    content:
      "Happy birthday, my amazing daughter! You are a source of joy and inspiration in my life. May this special day be filled with love, laughter, and unforgettable moments."
  },
  {
    id: 64,
    content:
      "To my beloved daughter, may your birthday be a day of joy and celebration! Your spirit shines bright, and I hope this year brings you closer to your dreams."
  },
  {
    id: 65,
    content:
      "Happy birthday to my lovely daughter! You are the heart of our family, and your laughter fills our home with happiness. May this year bring you closer to your dreams and fill your life with love."
  },
  {
    id: 66,
    content:
      "On your special day, my dear daughter, I want to remind you of how special you are to me. Your passion and determination inspire everyone around you. May this birthday be filled with joy and adventure."
  },
  {
    id: 67,
    content:
      "Happy birthday, my precious daughter! You have a unique way of brightening our lives, and your dreams inspire everyone around you. May your special day be filled with love, joy, and everything your heart desires."
  },
  {
    id: 68,
    content:
      "To my lovely daughter, on your birthday, I want you to know how cherished you are. Your kindness and creativity touch everyone you meet. May this year bring you happiness and fulfillment."
  },
  {
    id: 69,
    content:
      "Happy birthday to my beautiful daughter! Your laughter is a melody that fills our hearts with joy. May this day be as special as you are, surrounded by love and cherished moments."
  },
  {
    id: 70,
    content:
      "On your birthday, my sweet daughter, I wish you all the happiness in the world. Your spirit shines brightly, and your kindness inspires everyone around you. Enjoy every moment of your special day!"
  },
  {
    id: 71,
    content:
      "Happy birthday, my amazing daughter! You have a heart full of dreams and a spirit that lights up our lives. May this year bring you closer to all that you desire."
  },
  {
    id: 72,
    content:
      "To my precious daughter, today we celebrate the joy you bring to our lives. Your kindness and passion are a blessing. May your birthday be filled with love and beautiful memories."
  },
  {
    id: 73,
    content:
      "Happy birthday to my wonderful daughter! Your smile brightens my day, and your laughter is a joy to behold. May this year be filled with adventures and everything you love."
  },
  {
    id: 74,
    content:
      "On your special day, my dear daughter, I want to remind you how special you are. Your strength and kindness inspire everyone around you. May your birthday be as incredible as you are."
  },
  {
    id: 75,
    content:
      "Happy birthday, my lovely daughter! You are a shining star in our lives, and I am grateful for every moment we share. May this year be filled with love and wonderful experiences."
  },
  {
    id: 76,
    content:
      "To my sweet daughter, may your birthday be filled with joy and laughter! Your heart is full of love, and your dreams are boundless. Enjoy every moment of your special day."
  },
  {
    id: 77,
    content:
      "Happy birthday to my beautiful daughter! Your laughter fills our home with happiness, and your dreams inspire us all. May this day be as special as you are, filled with love and joy."
  },
  {
    id: 78,
    content:
      "On your birthday, my dear daughter, I want to remind you how loved you are. Your kindness and generosity shine brightly. May this year bring you closer to your dreams and fill your life with happiness."
  },
  {
    id: 79,
    content:
      "Happy birthday, my amazing daughter! You are a source of joy and inspiration in my life. May this special day be filled with love, laughter, and unforgettable moments."
  },
  {
    id: 80,
    content:
      "To my beloved daughter, may your birthday be a day of joy and celebration! Your spirit shines bright, and I hope this year brings you closer to your dreams."
  },
  {
    id: 81,
    content:
      "Happy birthday to my lovely daughter! You are the heart of our family, and your laughter fills our home with happiness. May this year bring you closer to your dreams and fill your life with love."
  },
  {
    id: 82,
    content:
      "On your special day, my dear daughter, I want to remind you of how special you are to me. Your passion and determination inspire everyone around you. May this birthday be filled with joy and adventure."
  },
  {
    id: 83,
    content:
      "Happy birthday, my precious daughter! You have a unique way of brightening our lives, and your dreams inspire everyone around you. May your special day be filled with love, joy, and everything your heart desires."
  },
  {
    id: 84,
    content:
      "To my lovely daughter, on your birthday, I want you to know how cherished you are. Your kindness and creativity touch everyone you meet. May this year bring you happiness and fulfillment."
  },
  {
    id: 85,
    content:
      "Happy birthday to my beautiful daughter! Your laughter is a melody that fills our hearts with joy. May this day be as special as you are, surrounded by love and cherished moments."
  },
  {
    id: 86,
    content:
      "On your birthday, my sweet daughter, I wish you all the happiness in the world. Your spirit shines brightly, and your kindness inspires everyone around you. Enjoy every moment of your special day!"
  },
  {
    id: 87,
    content:
      "Happy birthday, my amazing daughter! You have a heart full of dreams and a spirit that lights up our lives. May this year bring you closer to all that you desire."
  },
  {
    id: 88,
    content:
      "To my precious daughter, today we celebrate the joy you bring to our lives. Your kindness and passion are a blessing. May your birthday be filled with love and beautiful memories."
  },
  {
    id: 89,
    content:
      "Happy birthday to my wonderful daughter! Your smile brightens my day, and your laughter is a joy to behold. May this year be filled with adventures and everything you love."
  },
  {
    id: 90,
    content:
      "On your special day, my dear daughter, I want to remind you how special you are. Your strength and kindness inspire everyone around you. May your birthday be as incredible as you are."
  },
  {
    id: 91,
    content:
      "Happy birthday, my lovely daughter! You are a shining star in our lives, and I am grateful for every moment we share. May this year be filled with love and wonderful experiences."
  },
  {
    id: 92,
    content:
      "To my sweet daughter, may your birthday be filled with joy and laughter! Your heart is full of love, and your dreams are boundless. Enjoy every moment of your special day."
  },
  {
    id: 93,
    content:
      "Happy birthday to my beautiful daughter! Your laughter fills our home with happiness, and your dreams inspire us all. May this day be as special as you are, filled with love and joy."
  },
  {
    id: 94,
    content:
      "On your birthday, my dear daughter, I want to remind you how loved you are. Your kindness and generosity shine brightly. May this year bring you closer to your dreams and fill your life with happiness."
  },
  {
    id: 95,
    content:
      "Happy birthday, my amazing daughter! You are a source of joy and inspiration in my life. May this special day be filled with love, laughter, and unforgettable moments."
  },
  {
    id: 96,
    content:
      "To my beloved daughter, may your birthday be a day of joy and celebration! Your spirit shines bright, and I hope this year brings you closer to your dreams."
  },
  {
    id: 97,
    content:
      "Happy birthday to my lovely daughter! You are the heart of our family, and your laughter fills our home with happiness. May this year bring you closer to your dreams and fill your life with love."
  },
  {
    id: 98,
    content:
      "On your special day, my dear daughter, I want to remind you of how special you are to me. Your passion and determination inspire everyone around you. May this birthday be filled with joy and adventure."
  },
  {
    id: 99,
    content:
      "Happy birthday, my precious daughter! You have a unique way of brightening our lives, and your dreams inspire everyone around you. May your special day be filled with love, joy, and everything your heart desires."
  },
  {
    id: 100,
    content:
      "To my lovely daughter, on your birthday, I want you to know how cherished you are. Your kindness and creativity touch everyone you meet. May this year bring you happiness and fulfillment."
  },
  {
    id: 101,
    content:
      "Happy birthday to my beautiful daughter! Your laughter is a melody that fills our hearts with joy. May this day be as special as you are, surrounded by love and cherished moments."
  },
  {
    id: 102,
    content:
      "On your birthday, my sweet daughter, I wish you all the happiness in the world. Your spirit shines brightly, and your kindness inspires everyone around you. Enjoy every moment of your special day!"
  },
  {
    id: 103,
    content:
      "Happy birthday, my amazing daughter! You have a heart full of dreams and a spirit that lights up our lives. May this year bring you closer to all that you desire."
  },
  {
    id: 104,
    content:
      "To my precious daughter, today we celebrate the joy you bring to our lives. Your kindness and passion are a blessing. May your birthday be filled with love and beautiful memories."
  },
  {
    id: 105,
    content:
      "Happy birthday to my wonderful daughter! Your smile brightens my day, and your laughter is a joy to behold. May this year be filled with adventures and everything you love."
  },
  {
    id: 106,
    content:
      "On your special day, my dear daughter, I want to remind you how special you are. Your strength and kindness inspire everyone around you. May your birthday be as incredible as you are."
  },
  {
    id: 107,
    content:
      "Happy birthday, my lovely daughter! You are a shining star in our lives, and I am grateful for every moment we share. May this year be filled with love and wonderful experiences."
  },
  {
    id: 108,
    content:
      "To my sweet daughter, may your birthday be filled with joy and laughter! Your heart is full of love, and your dreams are boundless. Enjoy every moment of your special day."
  },
  {
    id: 109,
    content:
      "Happy birthday to my beautiful daughter! Your laughter fills our home with happiness, and your dreams inspire us all. May this day be as special as you are, filled with love and joy."
  },
  {
    id: 110,
    content:
      "On your birthday, my dear daughter, I want to remind you how loved you are. Your kindness and generosity shine brightly. May this year bring you closer to your dreams and fill your life with happiness."
  },
  {
    id: 111,
    content:
      "Happy birthday, my amazing daughter! You are a source of joy and inspiration in my life. May this special day be filled with love, laughter, and unforgettable moments."
  },
  {
    id: 112,
    content:
      "To my beloved daughter, may your birthday be a day of joy and celebration! Your spirit shines bright, and I hope this year brings you closer to your dreams."
  },
  {
    id: 113,
    content:
      "Happy birthday to my lovely daughter! You are the heart of our family, and your laughter fills our home with happiness. May this year bring you closer to your dreams and fill your life with love."
  },
  {
    id: 114,
    content:
      "On your special day, my dear daughter, I want to remind you of how special you are to me. Your passion and determination inspire everyone around you. May this birthday be filled with joy and adventure."
  },
  {
    id: 115,
    content:
      "Happy birthday, my precious daughter! You have a unique way of brightening our lives, and your dreams inspire everyone around you. May your special day be filled with love, joy, and everything your heart desires."
  },
  {
    id: 116,
    content:
      "To my lovely daughter, on your birthday, I want you to know how cherished you are. Your kindness and creativity touch everyone you meet. May this year bring you happiness and fulfillment."
  },
  {
    id: 117,
    content:
      "Happy birthday to my beautiful daughter! Your laughter is a melody that fills our hearts with joy. May this day be as special as you are, surrounded by love and cherished moments."
  },
  {
    id: 118,
    content:
      "On your birthday, my sweet daughter, I wish you all the happiness in the world. Your spirit shines brightly, and your kindness inspires everyone around you. Enjoy every moment of your special day!"
  },
  {
    id: 119,
    content:
      "Happy birthday, my amazing daughter! You have a heart full of dreams and a spirit that lights up our lives. May this year bring you closer to all that you desire."
  },
  {
    id: 120,
    content:
      "To my precious daughter, today we celebrate the joy you bring to our lives. Your kindness and passion are a blessing. May your birthday be filled with love and beautiful memories."
  },
  {
    id: 121,
    content:
      "Happy birthday to my wonderful daughter! Your smile brightens my day, and your laughter is a joy to behold. May this year be filled with adventures and everything you love."
  },
  {
    id: 122,
    content:
      "On your special day, my dear daughter, I want to remind you how special you are. Your strength and kindness inspire everyone around you. May your birthday be as incredible as you are."
  },
  {
    id: 123,
    content:
      "Happy birthday, my lovely daughter! You are a shining star in our lives, and I am grateful for every moment we share. May this year be filled with love and wonderful experiences."
  },
  {
    id: 124,
    content:
      "To my sweet daughter, may your birthday be filled with joy and laughter! Your heart is full of love, and your dreams are boundless. Enjoy every moment of your special day."
  },
  {
    id: 125,
    content:
      "Happy birthday to my beautiful daughter! Your laughter fills our home with happiness, and your dreams inspire us all. May this day be as special as you are, filled with love and joy."
  },
  {
    id: 126,
    content:
      "On your birthday, my dear daughter, I want to remind you how loved you are. Your kindness and generosity shine brightly. May this year bring you closer to your dreams and fill your life with happiness."
  },
  {
    id: 127,
    content: "Happy birthday, my amazing daughter!"
  },
  {
    id: 128,
    content:
      "To my beloved daughter, may your birthday be a day of joy and celebration! Your spirit shines bright, and I hope this year brings you closer to your dreams."
  },
  {
    id: 129,
    content:
      "Happy birthday to my lovely daughter! You are the heart of our family, and your laughter fills our home with happiness. May this year bring you closer to your dreams and fill your life with love."
  },
  {
    id: 130,
    content:
      "On your special day, my dear daughter, I want to remind you of how special you are to me. Your passion and determination inspire everyone around you. May this birthday be filled with joy and adventure."
  },
  {
    id: 131,
    content:
      "Happy birthday, my precious daughter! You have a unique way of brightening our lives, and your dreams inspire everyone around you. May your special day be filled with love, joy, and everything your heart desires."
  },
  {
    id: 132,
    content:
      "To my lovely daughter, on your birthday, I want you to know how cherished you are. Your kindness and creativity touch everyone you meet. May this year bring you happiness and fulfillment."
  },
  {
    id: 133,
    content:
      "Happy birthday to my beautiful daughter! Your laughter is a melody that fills our hearts with joy. May this day be as special as you are, surrounded by love and cherished moments."
  },
  {
    id: 134,
    content:
      "On your birthday, my sweet daughter, I wish you all the happiness in the world. Your spirit shines brightly, and your kindness inspires everyone around you. Enjoy every moment of your special day!"
  },
  {
    id: 135,
    content:
      "Happy birthday, my amazing daughter! You have a heart full of dreams and a spirit that lights up our lives. May this year bring you closer to all that you desire."
  },
  {
    id: 136,
    content:
      "To my precious daughter, today we celebrate the joy you bring to our lives. Your kindness and passion are a blessing. May your birthday be filled with love and beautiful memories."
  },
  {
    id: 137,
    content:
      "Happy birthday to my wonderful daughter! Your smile brightens my day, and your laughter is a joy to behold. May this year be filled with adventures and everything you love."
  },
  {
    id: 138,
    content:
      "On your special day, my dear daughter, I want to remind you how special you are. Your strength and kindness inspire everyone around you. May your birthday be as incredible as you are."
  },
  {
    id: 139,
    content:
      "Happy birthday, my lovely daughter! You are a shining star in our lives, and I am grateful for every moment we share. May this year be filled with love and wonderful experiences."
  },
  {
    id: 140,
    content:
      "To my sweet daughter, may your birthday be filled with joy and laughter! Your heart is full of love, and your dreams are boundless. Enjoy every moment of your special day."
  },
  {
    id: 141,
    content:
      "Happy birthday to my beautiful daughter! Your laughter fills our home with happiness, and your dreams inspire us all. May this day be as special as you are, filled with love and joy."
  },
  {
    id: 142,
    content:
      "On your birthday, my dear daughter, I want to remind you how loved you are. Your kindness and generosity shine brightly. May this year bring you closer to your dreams and fill your life with happiness."
  },
  {
    id: 143,
    content:
      "Happy birthday, my amazing daughter! You are a source of joy and inspiration in my life. May this special day be filled with love, laughter, and unforgettable moments."
  },
  {
    id: 144,
    content:
      "To my beloved daughter, may your birthday be a day of joy and celebration! Your spirit shines bright, and I hope this year brings you closer to your dreams."
  },
  {
    id: 145,
    content:
      "Happy birthday to my lovely daughter! You are the heart of our family, and your laughter fills our home with happiness. May this year bring you closer to your dreams and fill your life with love."
  },
  {
    id: 146,
    content:
      "On your special day, my dear daughter, I want to remind you of how special you are to me. Your passion and determination inspire everyone around you. May this birthday be filled with joy and adventure."
  },
  {
    id: 147,
    content:
      "Happy birthday, my precious daughter! You have a unique way of brightening our lives, and your dreams inspire everyone around you. May your special day be filled with love, joy, and everything your heart desires."
  },
  {
    id: 148,
    content:
      "To my lovely daughter, on your birthday, I want you to know how cherished you are. Your kindness and creativity touch everyone you meet. May this year bring you happiness and fulfillment."
  },
  {
    id: 149,
    content:
      "Happy birthday to my beautiful daughter! Your laughter is a melody that fills our hearts with joy. May this day be as special as you are, surrounded by love and cherished moments."
  },
  {
    id: 150,
    content:
      "On your birthday, my sweet daughter, I wish you all the happiness in the world. Your spirit shines brightly, and your kindness inspires everyone around you. Enjoy every moment of your special day!"
  },
  {
    id: 151,
    content:
      "Happy birthday, my amazing daughter! You have a heart full of dreams and a spirit that lights up our lives. May this year bring you closer to all that you desire."
  },
  {
    id: 152,
    content:
      "To my precious daughter, today we celebrate the joy you bring to our lives. Your kindness and passion are a blessing. May your birthday be filled with love and beautiful memories."
  }

  // Continue with additional messages up to 200...
];

const friend = [
  {
    id: 1,
    content:
      "Happy birthday to an amazing friend! Your presence in my life brings so much joy. May your day be filled with laughter and your year with adventures!"
  },
  {
    id: 2,
    content:
      "Cheers to you on your special day! May this birthday bring you all the happiness you deserve. Thank you for being such a wonderful friend!"
  },
  {
    id: 3,
    content:
      "Happy birthday! I’m grateful for your friendship and all the memories we’ve created together. Here’s to many more years of fun and laughter!"
  },
  {
    id: 4,
    content:
      "On your birthday, I just want to remind you how much you mean to me. You’re not just a friend; you’re family. Enjoy your special day!"
  },
  {
    id: 5,
    content:
      "Happy birthday to my partner in crime! May your day be as fabulous as you are, filled with love, joy, and unforgettable moments!"
  },
  {
    id: 6,
    content:
      "Wishing you a day filled with joy and a year filled with adventures. Happy birthday to an incredible friend!"
  },
  {
    id: 7,
    content:
      "Happy birthday! Your friendship is a treasure that I hold close to my heart. May your day be filled with all the things you love!"
  },
  {
    id: 8,
    content:
      "Cheers to another year of fun, laughter, and unforgettable memories. Happy birthday to an amazing friend!"
  },
  {
    id: 9,
    content:
      "On your special day, I want to celebrate you! You deserve all the happiness in the world. Happy birthday, my dear friend!"
  },
  {
    id: 10,
    content:
      "Happy birthday! Your friendship makes every day brighter. May this year bring you everything you’ve been dreaming of."
  },
  {
    id: 11,
    content:
      "Wishing you a fantastic birthday filled with all your favorite things. Thank you for being such a wonderful friend!"
  },
  {
    id: 12,
    content:
      "Happy birthday to someone who knows me better than anyone else! I’m so grateful for your friendship. Let’s celebrate today!"
  },
  {
    id: 13,
    content:
      "On your birthday, I wish you all the love and happiness in the world. Thank you for being the amazing friend that you are!"
  },
  {
    id: 14,
    content:
      "Happy birthday! Your friendship is one of the greatest gifts in my life. May your day be as special as you are!"
  },
  {
    id: 15,
    content:
      "Cheers to you on your birthday! May your year ahead be filled with great adventures and endless possibilities."
  },
  {
    id: 16,
    content:
      "Happy birthday to my dearest friend! May your day be filled with love, laughter, and everything you’ve been wishing for."
  },
  {
    id: 17,
    content:
      "Wishing you a birthday as amazing as you are! I’m so thankful for your friendship and all the memories we’ve shared."
  },
  {
    id: 18,
    content:
      "Happy birthday! Your positivity and spirit light up every room. May this year bring you all the joy you bring to others!"
  },
  {
    id: 19,
    content:
      "On your special day, I hope you are surrounded by love and happiness. You deserve the world, my friend. Happy birthday!"
  },
  {
    id: 20,
    content:
      "Happy birthday! Let’s make this day unforgettable, just like our friendship. Here’s to another year of adventures!"
  },
  {
    id: 21,
    content:
      "Wishing you all the success and happiness in the world on your birthday! You’re an amazing friend, and I’m lucky to have you."
  },
  {
    id: 22,
    content:
      "Happy birthday! May your day be filled with all the joy and laughter you bring to everyone around you."
  },
  {
    id: 23,
    content:
      "Cheers to another year of friendship and adventures! Happy birthday, my wonderful friend!"
  },
  {
    id: 24,
    content:
      "On your birthday, I want you to know how much you mean to me. Your friendship is a gift I cherish every day!"
  },
  {
    id: 25,
    content:
      "Happy birthday! I hope this year is filled with wonderful moments and endless opportunities for you."
  },
  {
    id: 26,
    content:
      "Wishing you a day that’s as fabulous as you are! Thank you for being such an incredible friend."
  },
  {
    id: 27,
    content:
      "Happy birthday to my confidant and partner in crime! Let’s make this year even more amazing than the last!"
  },
  {
    id: 28,
    content:
      "On your special day, I’m celebrating you! You deserve all the happiness and love in the world."
  },
  {
    id: 29,
    content:
      "Happy birthday! May your dreams take flight this year, and may our friendship continue to grow."
  },
  {
    id: 30,
    content:
      "Wishing you a birthday filled with all your favorite things. Thank you for being such a wonderful friend!"
  },
  {
    id: 31,
    content:
      "Happy birthday to someone who makes every day brighter! May your year ahead be filled with joy and laughter."
  },
  {
    id: 32,
    content:
      "Cheers to you on your birthday! Let’s celebrate all the amazing moments we’ve shared and the many more to come."
  },
  {
    id: 33,
    content:
      "On your special day, I just want to say how grateful I am for your friendship. You make life so much sweeter!"
  },
  {
    id: 34,
    content:
      "Happy birthday! I hope your day is filled with love, laughter, and everything you’ve been dreaming of."
  },
  {
    id: 35,
    content:
      "Wishing you a fantastic birthday! Your friendship is one of the greatest gifts I could ever ask for."
  },
  {
    id: 36,
    content:
      "Happy birthday to my incredible friend! May this year be filled with adventure, joy, and all your heart desires."
  },
  {
    id: 37,
    content:
      "On your birthday, I want to celebrate you! You are an amazing friend, and I’m so lucky to have you in my life."
  },
  {
    id: 38,
    content:
      "Happy birthday! May your day be as wonderful as you are and your year filled with unforgettable moments."
  },
  {
    id: 39,
    content:
      "Wishing you a birthday filled with love and laughter! Your friendship means the world to me."
  },
  {
    id: 40,
    content:
      "Cheers to you on your special day! May this year bring you all the happiness and success you deserve."
  },
  {
    id: 41,
    content:
      "Happy birthday! You’re not just a friend; you’re family. I cherish our bond and look forward to making more memories!"
  },
  {
    id: 42,
    content:
      "On your birthday, I hope you feel all the love that surrounds you. You deserve it, my dear friend!"
  },
  {
    id: 43,
    content:
      "Happy birthday to my favorite partner in adventure! Let’s make this year even more amazing than the last!"
  },
  {
    id: 44,
    content:
      "Wishing you a fantastic birthday filled with all your favorite things! Thank you for being such a wonderful friend."
  },
  {
    id: 45,
    content:
      "Happy birthday! May your day be filled with joy, laughter, and all the people you love. You deserve the best!"
  },
  {
    id: 46,
    content:
      "On your special day, I want to remind you how much you mean to me. Your friendship is a true blessing."
  },
  {
    id: 47,
    content:
      "Happy birthday! Let’s celebrate this special day with laughter, love, and all the good things in life!"
  },
  {
    id: 48,
    content:
      "Wishing you a birthday as fabulous as you are! Your friendship makes every day brighter."
  },
  {
    id: 49,
    content:
      "Happy birthday to my amazing friend! May this year be filled with adventure, success, and all your heart desires."
  },
  {
    id: 50,
    content:
      "On your birthday, I hope you are surrounded by love and happiness. You deserve all the best in life!"
  },
  {
    id: 51,
    content:
      "Happy birthday! Your friendship brings so much joy to my life. May your day be filled with laughter and love!"
  },
  {
    id: 52,
    content:
      "Cheers to you on your special day! I’m grateful for all the memories we’ve created together. Here’s to many more adventures!"
  },
  {
    id: 53,
    content:
      "Happy birthday! May your day be filled with happiness and your year ahead with success. You deserve it all!"
  },
  {
    id: 54,
    content:
      "On your birthday, I celebrate the wonderful person you are. Thank you for being such an amazing friend. Enjoy your day!"
  },
  {
    id: 55,
    content:
      "Wishing you a fantastic birthday! Your positivity and spirit are truly inspiring. Have an amazing day!"
  },
  {
    id: 56,
    content:
      "Happy birthday! Your friendship is a treasure, and I’m so grateful to have you in my life. Enjoy every moment of your special day!"
  },
  {
    id: 57,
    content:
      "Cheers to another year of laughter and joy! May your birthday be as wonderful as you are!"
  },
  {
    id: 58,
    content:
      "Happy birthday! Your kindness and generosity make the world a better place. May your day be filled with love and joy!"
  },
  {
    id: 59,
    content:
      "On your special day, I want you to know how much you are appreciated. Thank you for being a true friend!"
  },
  {
    id: 60,
    content:
      "Wishing you a day as fabulous as you are! May this year bring you new opportunities and endless happiness."
  },
  {
    id: 61,
    content:
      "Happy birthday! Your laughter is contagious, and your spirit is uplifting. Enjoy your special day to the fullest!"
  },
  {
    id: 62,
    content:
      "On your birthday, I just want to remind you how much you are loved. You bring so much joy into my life!"
  },
  {
    id: 63,
    content:
      "Happy birthday! May your day be filled with all the things that make you smile. You deserve it!"
  },
  {
    id: 64,
    content:
      "Cheers to you on your birthday! Your friendship means the world to me. I hope your day is as special as you are!"
  },
  {
    id: 65,
    content:
      "Wishing you a birthday filled with joy, laughter, and all your heart desires. You are an incredible friend!"
  },
  {
    id: 66,
    content:
      "Happy birthday! Your friendship is a beautiful gift that I cherish every day. Enjoy your special day!"
  },
  {
    id: 67,
    content:
      "On your special day, I hope you are surrounded by love and happiness. You deserve all the best!"
  },
  {
    id: 68,
    content:
      "Happy birthday! May this year bring you new adventures, amazing memories, and all the happiness in the world."
  },
  {
    id: 69,
    content:
      "Cheers to another year of friendship and fun! May your birthday be filled with love and laughter."
  },
  {
    id: 70,
    content:
      "Happy birthday! Your smile brightens my day, and I’m so grateful for our friendship. Enjoy your special day!"
  },
  {
    id: 71,
    content:
      "On your birthday, I celebrate you and all the joy you bring into my life. May your year be filled with beautiful moments!"
  },
  {
    id: 72,
    content:
      "Wishing you a birthday as wonderful as you are! May this year bring you joy and success in everything you do."
  },
  {
    id: 73,
    content:
      "Happy birthday! Your friendship is a true blessing. May your day be filled with all the love and happiness you deserve!"
  },
  {
    id: 74,
    content:
      "On your special day, I just want to remind you how much you are loved. Thank you for being such a fantastic friend!"
  },
  {
    id: 75,
    content:
      "Wishing you a fantastic birthday filled with laughter and joy! You deserve all the wonderful things this life has to offer."
  },
  {
    id: 76,
    content:
      "Happy birthday! May your day be as bright as your smile and as wonderful as your heart."
  },
  {
    id: 77,
    content:
      "Cheers to you on your birthday! Your friendship is a treasure, and I’m grateful for every moment we share."
  },
  {
    id: 78,
    content:
      "Happy birthday! May your day be filled with all the things you love, and may the year ahead bring you closer to your dreams."
  },
  {
    id: 79,
    content:
      "On your birthday, I celebrate you and all the joy you bring into my life. You are a true blessing, and I love you dearly!"
  },
  {
    id: 80,
    content:
      "Wishing you a birthday filled with joy, laughter, and all your heart desires. You deserve every bit of happiness!"
  },
  {
    id: 81,
    content:
      "Happy birthday to my incredible friend! You bring so much joy into my life, and I’m so grateful for our friendship."
  },
  {
    id: 82,
    content:
      "On your special day, I want to celebrate the wonderful person you are. Thank you for being such an amazing friend!"
  },
  {
    id: 83,
    content:
      "Wishing you a fantastic birthday filled with beautiful moments! May this year bring you all the love and happiness you deserve."
  },
  {
    id: 84,
    content:
      "Happy birthday! Your laughter is music to my soul. Enjoy your special day, my dear friend!"
  },
  {
    id: 85,
    content:
      "On your birthday, I want to remind you how much you are loved and appreciated. You are a blessing in my life!"
  },
  {
    id: 86,
    content:
      "Wishing you a birthday filled with joy, laughter, and all your heart desires. You are an incredible friend!"
  },
  {
    id: 87,
    content:
      "Happy birthday! Your friendship brings so much joy to my life. May your day be filled with laughter and love!"
  },
  {
    id: 88,
    content:
      "Cheers to you on your special day! I’m grateful for all the memories we’ve created together. Here’s to many more adventures!"
  },
  {
    id: 89,
    content:
      "Happy birthday! May your day be filled with happiness and your year ahead with success. You deserve it all!"
  },
  {
    id: 90,
    content:
      "On your birthday, I celebrate the wonderful person you are. Thank you for being such an amazing friend. Enjoy your day!"
  },
  {
    id: 91,
    content:
      "Wishing you a fantastic birthday! Your positivity and spirit are truly inspiring. Have an amazing day!"
  },
  {
    id: 92,
    content:
      "Happy birthday! Your friendship is a treasure, and I’m so grateful to have you in my life. Enjoy every moment of your special day!"
  },
  {
    id: 93,
    content:
      "Cheers to another year of laughter and joy! May your birthday be as wonderful as you are!"
  },
  {
    id: 94,
    content:
      "Happy birthday! Your kindness and generosity make the world a better place. May your day be filled with love and joy!"
  },
  {
    id: 95,
    content:
      "On your special day, I want you to know how much you are appreciated. Thank you for being a true friend!"
  },
  {
    id: 96,
    content:
      "Wishing you a day as fabulous as you are! May this year bring you new opportunities and endless happiness."
  },
  {
    id: 97,
    content:
      "Happy birthday! Your laughter is contagious, and your spirit is uplifting. Enjoy your special day to the fullest!"
  },
  {
    id: 98,
    content:
      "On your birthday, I just want to remind you how much you are loved. You bring so much joy into my life!"
  },
  {
    id: 99,
    content:
      "Happy birthday! May your day be filled with all the things that make you smile. You deserve it!"
  },
  {
    id: 100,
    content:
      "Cheers to you on your birthday! Your friendship means the world to me. I hope your day is as special as you are!"
  },
  {
    id: 101,
    content:
      "Wishing you a birthday filled with joy, laughter, and all your heart desires. You are an incredible friend!"
  },
  {
    id: 102,
    content:
      "Happy birthday! Your friendship is a beautiful gift that I cherish every day. Enjoy your special day!"
  },
  {
    id: 103,
    content:
      "On your special day, I hope you are surrounded by love and happiness. You deserve all the best!"
  },
  {
    id: 104,
    content:
      "Happy birthday! May this year bring you new adventures, amazing memories, and all the happiness in the world."
  },
  {
    id: 105,
    content:
      "Cheers to another year of friendship and fun! May your birthday be filled with love and laughter."
  },
  {
    id: 106,
    content:
      "Happy birthday! Your smile brightens my day, and I’m so grateful for our friendship. Enjoy your special day!"
  },
  {
    id: 107,
    content:
      "On your birthday, I celebrate you and all the joy you bring into my life. May your year be filled with beautiful moments!"
  },
  {
    id: 108,
    content:
      "Wishing you a birthday as wonderful as you are! May this year bring you joy and success in everything you do."
  },
  {
    id: 109,
    content:
      "Happy birthday! Your friendship is a true blessing. May your day be filled with all the love and happiness you deserve!"
  },
  {
    id: 110,
    content:
      "On your special day, I just want to remind you how much you are loved. Thank you for being such a fantastic friend!"
  },
  {
    id: 111,
    content:
      "Wishing you a fantastic birthday filled with laughter and joy! You deserve all the wonderful things this life has to offer."
  },
  {
    id: 112,
    content:
      "Happy birthday! May your day be as bright as your smile and as wonderful as your heart."
  },
  {
    id: 113,
    content:
      "Cheers to you on your birthday! Your friendship is a treasure, and I’m grateful for every moment we share."
  },
  {
    id: 114,
    content:
      "Happy birthday! May your day be filled with all the things you love, and may the year ahead bring you closer to your dreams."
  },
  {
    id: 115,
    content:
      "On your birthday, I celebrate you and all the joy you bring into my life. You are a true blessing, and I love you dearly!"
  },
  {
    id: 116,
    content:
      "Wishing you a birthday filled with joy, laughter, and all your heart desires. You are an incredible friend!"
  },
  {
    id: 117,
    content:
      "Happy birthday! Your friendship brings so much joy to my life. May your day be filled with laughter and love!"
  },
  {
    id: 118,
    content:
      "Cheers to you on your special day! I’m grateful for all the memories we’ve created together. Here’s to many more adventures!"
  },
  {
    id: 119,
    content:
      "Happy birthday! May your day be filled with happiness and your year ahead with success. You deserve it all!"
  },
  {
    id: 120,
    content:
      "On your birthday, I celebrate the wonderful person you are. Thank you for being such an amazing friend. Enjoy your day!"
  },
  {
    id: 121,
    content:
      "Wishing you a fantastic birthday! Your positivity and spirit are truly inspiring. Have an amazing day!"
  },
  {
    id: 122,
    content:
      "Happy birthday! Your friendship is a treasure, and I’m so grateful to have you in my life. Enjoy every moment of your special day!"
  }
];
const neighbor = [
  {
    id: 1,
    content:
      "Happy birthday to my wonderful neighbor! Your kindness and warmth make our neighborhood a better place. May this special day bring you joy, laughter, and all the love you share with others. Here's to many more years of friendship and community spirit!"
  },
  {
    id: 2,
    content:
      "To the best neighbor anyone could ask for, happy birthday! Your generosity and caring nature brighten our days. May your birthday be filled with all the joy you bring to those around you. Cheers to you and the amazing years ahead!"
  },
  {
    id: 3,
    content:
      "Happy birthday! Your friendship is a true blessing. Thank you for being the wonderful neighbor you are. May your special day be as fantastic as you are, filled with love, laughter, and cherished moments."
  },
  {
    id: 4,
    content:
      "Wishing a fantastic birthday to my amazing neighbor! Your positivity and kindness inspire us all. May your day be filled with beautiful moments, surrounded by loved ones who appreciate you as much as we do!"
  },
  {
    id: 5,
    content:
      "Happy birthday! Your laughter and spirit are infectious, making our neighborhood a brighter place. May this year bring you happiness, health, and all the dreams your heart desires."
  },
  {
    id: 6,
    content:
      "To my dear neighbor, happy birthday! Your warmth and compassion have created a lovely community around us. May your birthday be filled with the love you so freely give to others."
  },
  {
    id: 7,
    content:
      "Wishing you a very happy birthday! Your friendship means the world to me. I hope your special day is filled with laughter, love, and everything you hold dear."
  },
  {
    id: 8,
    content:
      "Happy birthday to a neighbor who feels like family! Your kindness and generosity are unmatched. May this year bring you everything you hope for and more."
  },
  {
    id: 9,
    content:
      "On your special day, I want to express how grateful I am to have you as a neighbor. Your kindness makes every day brighter. Happy birthday and may all your wishes come true!"
  },
  {
    id: 10,
    content:
      "To my amazing neighbor, happy birthday! Your smile lights up our community. May your day be filled with love, laughter, and all the good things you bring to our lives."
  },
  {
    id: 11,
    content:
      "Happy birthday! You are not just a neighbor but a true friend. May your special day be as wonderful as you are, filled with joy and cherished moments."
  },
  {
    id: 12,
    content:
      "Wishing a fabulous birthday to my incredible neighbor! Your spirit and kindness make every day brighter. May your birthday be filled with all the love you deserve."
  },
  {
    id: 13,
    content:
      "Happy birthday to a neighbor who is truly special! Your caring heart and friendly nature make our community a better place. May your day be filled with all the joy you bring to others."
  },
  {
    id: 14,
    content:
      "To the best neighbor, happy birthday! Your generosity and kindness are a blessing to us all. May your special day be filled with love, laughter, and beautiful memories."
  },
  {
    id: 15,
    content:
      "Happy birthday! Your positive energy brightens our neighborhood. May this year bring you happiness, health, and countless reasons to smile."
  },
  {
    id: 16,
    content:
      "Wishing you a joyful birthday! Your friendship is a treasure. May your day be filled with all the wonderful moments you share with those you love."
  },
  {
    id: 17,
    content:
      "To my lovely neighbor, happy birthday! Your kindness and support mean so much to me. May this day be as special as you are, filled with love and laughter."
  },
  {
    id: 18,
    content:
      "Happy birthday! Your spirit and generosity inspire us all. May your special day be filled with joy, surrounded by loved ones who appreciate you."
  },
  {
    id: 19,
    content:
      "Wishing a fantastic birthday to my wonderful neighbor! Your warmth and kindness make our neighborhood feel like home. May this year be your best yet."
  },
  {
    id: 20,
    content:
      "Happy birthday to the neighbor who always knows how to make others smile! Your laughter is contagious, and your kindness is appreciated. Have a fabulous day!"
  },
  {
    id: 21,
    content:
      "To my dear neighbor, happy birthday! Your friendship is a true gift. May this special day bring you all the happiness and love you give to others."
  },
  {
    id: 22,
    content:
      "Wishing you a wonderful birthday! Your spirit brightens our lives. May your day be filled with joy, laughter, and all the things you love."
  },
  {
    id: 23,
    content:
      "Happy birthday to a fantastic neighbor! Your generosity and warmth are a blessing. May this year bring you joy, health, and everything you dream of."
  },
  {
    id: 24,
    content:
      "To the best neighbor ever, happy birthday! Your kindness and support make our neighborhood a better place. May your special day be filled with all the love you share."
  },
  {
    id: 25,
    content:
      "Happy birthday! Your laughter and kindness make our community brighter. May this year be filled with beautiful moments and cherished memories."
  },
  {
    id: 26,
    content:
      "Wishing a joyous birthday to my incredible neighbor! Your friendship is a treasure. May your day be filled with love, laughter, and all your favorite things."
  },
  {
    id: 27,
    content:
      "Happy birthday to a neighbor who feels like family! Your kindness and compassion create a wonderful community. May your day be as special as you are."
  },
  {
    id: 28,
    content:
      "To my amazing neighbor, happy birthday! Your positivity and warmth make every day brighter. May this year bring you all the happiness you deserve."
  },
  {
    id: 29,
    content:
      "Happy birthday! Your spirit and generosity inspire us all. May your special day be filled with joy, surrounded by loved ones who appreciate you."
  },
  {
    id: 30,
    content:
      "Wishing you a fantastic birthday! Your kindness makes our neighborhood a better place. May your day be filled with laughter, love, and cherished moments."
  },
  {
    id: 31,
    content:
      "To my dear neighbor, happy birthday! Your warmth and friendship mean the world to me. May your special day be as wonderful as you are."
  },
  {
    id: 32,
    content:
      "Happy birthday! Your laughter and joy are contagious. May this year bring you happiness, health, and all the love you give to others."
  },
  {
    id: 33,
    content:
      "Wishing a wonderful birthday to my amazing neighbor! Your kindness and support are a blessing. May your day be filled with beautiful moments."
  },
  {
    id: 34,
    content:
      "Happy birthday to the best neighbor! Your spirit and generosity brighten our community. May this year bring you all the happiness you deserve."
  },
  {
    id: 35,
    content:
      "To my lovely neighbor, happy birthday! Your friendship means so much to me. May your special day be filled with love, laughter, and cherished memories."
  },
  {
    id: 36,
    content:
      "Happy birthday! Your kindness and warmth create a beautiful community. May your day be filled with joy, surrounded by loved ones who care about you."
  },
  {
    id: 37,
    content:
      "Wishing a joyful birthday to my incredible neighbor! Your laughter and spirit make every day brighter. May this year be your best yet."
  },
  {
    id: 38,
    content:
      "Happy birthday to a neighbor who is truly special! Your friendship is a gift. May your special day be as wonderful as you are, filled with love and joy."
  },
  {
    id: 39,
    content:
      "To the best neighbor, happy birthday! Your generosity and kindness are a blessing to us all. May your day be filled with all the love you share."
  },
  {
    id: 40,
    content:
      "Happy birthday! Your positive energy lights up our neighborhood. May this year bring you happiness, health, and all your dreams come true."
  },
  {
    id: 41,
    content:
      "Wishing you a delightful birthday! Your friendship is a treasure. May your day be filled with love, laughter, and everything you hold dear."
  },
  {
    id: 42,
    content:
      "To my wonderful neighbor, happy birthday! Your warmth and compassion create a lovely community. May your special day be filled with all the joy you bring to others."
  },
  {
    id: 43,
    content:
      "Happy birthday! Your spirit and generosity inspire us all. May your day be filled with laughter, love, and cherished moments."
  },
  {
    id: 44,
    content:
      "Wishing a fantastic birthday to my amazing neighbor! Your kindness and support mean so much to everyone around you. May your special day be filled with happiness and all the things you love."
  },
  {
    id: 45,
    content:
      "Happy birthday to my incredible neighbor! Your friendly nature and positive spirit make our community feel like home. May this year be filled with all your heart's desires."
  },
  {
    id: 46,
    content:
      "To my dear neighbor, happy birthday! Your laughter brightens our days, and your kindness touches our hearts. May your special day be surrounded by love and joy."
  },
  {
    id: 47,
    content:
      "Wishing you a joyful birthday! Your friendship is a precious gift. May this year bring you happiness, health, and countless reasons to smile."
  },
  {
    id: 48,
    content:
      "Happy birthday! Your spirit and generosity uplift everyone around you. May your special day be filled with love, laughter, and all the joy you share with others."
  },
  {
    id: 49,
    content:
      "To my wonderful neighbor, happy birthday! Your kindness and warmth are a blessing to our community. May this year bring you everything you hope for and more."
  },
  {
    id: 50,
    content:
      "Happy birthday! Your friendship is a true treasure. May your special day be as amazing as you are, filled with joy and surrounded by those who love you."
  },
  {
    id: 51,
    content:
      "Wishing a fabulous birthday to my incredible neighbor! Your caring nature makes our neighborhood a better place. May your day be filled with beautiful moments and cherished memories."
  },
  {
    id: 52,
    content:
      "Happy birthday to a neighbor who always knows how to make others smile! Your kindness brightens our days. May this year bring you happiness, health, and all your dreams come true."
  },
  {
    id: 53,
    content:
      "To my dear neighbor, happy birthday! Your friendship is a true gift. May your special day be filled with love, laughter, and all the joy you bring to others."
  },
  {
    id: 54,
    content:
      "Wishing you a wonderful birthday! Your spirit brightens our lives. May your day be filled with joy, laughter, and everything you love."
  },
  {
    id: 55,
    content:
      "Happy birthday to a fantastic neighbor! Your generosity and warmth are a blessing. May this year bring you joy, health, and everything you dream of."
  },
  {
    id: 56,
    content:
      "To the best neighbor ever, happy birthday! Your kindness and support make our neighborhood a better place. May your special day be filled with all the love you share."
  },
  {
    id: 57,
    content:
      "Happy birthday! Your laughter and kindness make our community brighter. May this year be filled with beautiful moments and cherished memories."
  },
  {
    id: 58,
    content:
      "Wishing a joyful birthday to my incredible neighbor! Your friendship is a treasure. May your day be filled with love, laughter, and all your favorite things."
  },
  {
    id: 59,
    content:
      "Happy birthday to a neighbor who feels like family! Your kindness and compassion create a wonderful community. May your day be as special as you are."
  },
  {
    id: 60,
    content:
      "To my amazing neighbor, happy birthday! Your positivity and warmth make every day brighter. May this year bring you all the happiness you deserve."
  },
  {
    id: 61,
    content:
      "Happy birthday! Your spirit and generosity inspire us all. May your special day be filled with joy, surrounded by loved ones who appreciate you."
  },
  {
    id: 62,
    content:
      "Wishing you a fantastic birthday! Your kindness makes our neighborhood a better place. May your day be filled with laughter, love, and cherished moments."
  },
  {
    id: 63,
    content:
      "To my dear neighbor, happy birthday! Your warmth and friendship mean the world to me. May your special day be as wonderful as you are."
  },
  {
    id: 64,
    content:
      "Happy birthday! Your laughter and joy are contagious. May this year bring you happiness, health, and all the love you give to others."
  },
  {
    id: 65,
    content:
      "Wishing a wonderful birthday to my amazing neighbor! Your kindness and support are a blessing. May your day be filled with beautiful moments."
  },
  {
    id: 66,
    content:
      "Happy birthday to the best neighbor! Your spirit and generosity brighten our community. May this year bring you all the happiness you deserve."
  },
  {
    id: 67,
    content:
      "To my lovely neighbor, happy birthday! Your friendship means so much to me. May your special day be filled with love, laughter, and cherished memories."
  },
  {
    id: 68,
    content:
      "Happy birthday! Your kindness and warmth create a beautiful community. May your day be filled with joy, surrounded by loved ones who care about you."
  },
  {
    id: 69,
    content:
      "Wishing a joyful birthday to my incredible neighbor! Your laughter and spirit make every day brighter. May this year be your best yet."
  },
  {
    id: 70,
    content:
      "Happy birthday to a neighbor who is truly special! Your friendship is a gift. May your special day be as wonderful as you are, filled with love and joy."
  },
  {
    id: 71,
    content:
      "To the best neighbor, happy birthday! Your generosity and kindness are a blessing to us all. May your day be filled with all the love you share."
  },
  {
    id: 72,
    content:
      "Happy birthday! Your positive energy lights up our neighborhood. May this year bring you happiness, health, and all your dreams come true."
  },
  {
    id: 73,
    content:
      "Wishing you a delightful birthday! Your friendship is a treasure. May your day be filled with love, laughter, and everything you hold dear."
  },
  {
    id: 74,
    content:
      "To my wonderful neighbor, happy birthday! Your warmth and compassion create a lovely community. May your special day be filled with all the joy you bring to others."
  },
  {
    id: 75,
    content:
      "Happy birthday! Your spirit and generosity inspire us all. May your day be filled with laughter, love, and cherished moments."
  },
  {
    id: 76,
    content:
      "Wishing a fantastic birthday to my amazing neighbor! Your kindness and support mean so much to everyone around you. May your special day be filled with happiness and all the things you love."
  },
  {
    id: 77,
    content:
      "Happy birthday to my incredible neighbor! Your friendly nature and positive spirit make our community feel like home. May this year be filled with all your heart's desires."
  },
  {
    id: 78,
    content:
      "To my dear neighbor, happy birthday! Your laughter brightens our days, and your kindness touches our hearts. May your special day be surrounded by love and joy."
  },
  {
    id: 79,
    content:
      "Wishing you a joyful birthday! Your friendship is a precious gift. May this year bring you happiness, health, and countless reasons to smile."
  },
  {
    id: 80,
    content:
      "Happy birthday! Your spirit and generosity uplift everyone around you. May your special day be filled with love, laughter, and all the joy you share with others."
  },
  {
    id: 81,
    content:
      "To my wonderful neighbor, happy birthday! Your kindness and warmth are a blessing to our community. May this year bring you everything you hope for and more."
  },
  {
    id: 82,
    content:
      "Happy birthday! Your friendship is a true treasure. May your special day be as amazing as you are, filled with joy and surrounded by those who love you."
  },
  {
    id: 83,
    content:
      "Wishing a fabulous birthday to my incredible neighbor! Your caring nature makes our neighborhood a better place. May your day be filled with beautiful moments and cherished memories."
  },
  {
    id: 84,
    content:
      "Happy birthday to a neighbor who always knows how to make others smile! Your kindness brightens our days. May this year bring you happiness, health, and all your dreams come true."
  },
  {
    id: 85,
    content:
      "To my dear neighbor, happy birthday! Your friendship is a true gift. May your special day be filled with love, laughter, and all the joy you bring to others."
  },
  {
    id: 86,
    content:
      "Wishing you a wonderful birthday! Your spirit brightens our lives. May your day be filled with joy, laughter, and everything you love."
  },
  {
    id: 87,
    content:
      "Happy birthday to a fantastic neighbor! Your generosity and warmth are a blessing. May this year bring you joy, health, and everything you dream of."
  },
  {
    id: 88,
    content:
      "To the best neighbor ever, happy birthday! Your kindness and support make our neighborhood a better place. May your special day be filled with all the love you share."
  },
  {
    id: 89,
    content:
      "Happy birthday! Your laughter and kindness make our community brighter. May this year bring you happiness, health, and all your dreams come true."
  },
  {
    id: 90,
    content:
      "Wishing a joyful birthday to my incredible neighbor! Your friendship is a treasure. May your day be filled with love, laughter, and all your favorite things."
  },
  {
    id: 91,
    content:
      "Happy birthday to a neighbor who feels like family! Your kindness and compassion create a wonderful community. May your day be as special as you are."
  },
  {
    id: 92,
    content:
      "To my amazing neighbor, happy birthday! Your positivity and warmth make every day brighter. May this year bring you all the happiness you deserve."
  },
  {
    id: 93,
    content:
      "Happy birthday! Your spirit and generosity inspire us all. May your special day be filled with joy, surrounded by loved ones who appreciate you."
  },
  {
    id: 94,
    content:
      "Wishing you a fantastic birthday! Your kindness makes our neighborhood a better place. May your day be filled with laughter, love, and cherished moments."
  },
  {
    id: 95,
    content:
      "To my dear neighbor, happy birthday! Your warmth and friendship mean the world to me. May your special day be as wonderful as you are."
  },
  {
    id: 96,
    content:
      "Happy birthday! Your laughter and joy are contagious. May this year bring you happiness, health, and all the love you give to others."
  },
  {
    id: 97,
    content:
      "Wishing a wonderful birthday to my amazing neighbor! Your kindness and support are a blessing. May your day be filled with beautiful moments."
  },
  {
    id: 98,
    content:
      "Happy birthday to the best neighbor! Your spirit and generosity brighten our community. May this year bring you all the happiness you deserve."
  },
  {
    id: 99,
    content:
      "To my lovely neighbor, happy birthday! Your friendship means so much to me. May your special day be filled with love, laughter, and cherished memories."
  },
  {
    id: 100,
    content:
      "Happy birthday! Your positive energy lights up our neighborhood. May this year bring you happiness, health, and all your dreams come true."
  }
];

const sister = [
  {
    id: 1,
    content:
      "Happy birthday to the best sister in the world! Your love and support mean everything to me. May your day be filled with joy and laughter."
  },
  {
    id: 2,
    content:
      "Wishing you a fabulous birthday, dear sister! You are not just my sister, but also my best friend. May this year bring you all the happiness you deserve."
  },
  {
    id: 3,
    content:
      "To my wonderful sister, happy birthday! Your strength and kindness inspire me every day. May your special day be as amazing as you are."
  },
  {
    id: 4,
    content:
      "Happy birthday to my incredible sister! You bring so much joy into my life. May your year ahead be filled with love and success."
  },
  {
    id: 5,
    content:
      "Wishing you a joyful birthday, sister! Your laughter brightens my days. May this year be your best one yet."
  },
  {
    id: 6,
    content:
      "To my sweet sister, happy birthday! Your heart is as beautiful as your smile. May your day be filled with everything you love."
  },
  {
    id: 7,
    content:
      "Happy birthday! You are not just my sister, but my confidante. May this year bring you all your dreams come true."
  },
  {
    id: 8,
    content:
      "Wishing you a fabulous birthday, sis! Your spirit and determination inspire me. May your special day be filled with love and joy."
  },
  {
    id: 9,
    content:
      "To my beloved sister, happy birthday! Your support and kindness mean the world to me. May your day be as wonderful as you are."
  },
  {
    id: 10,
    content:
      "Happy birthday! You make the world a better place with your kindness. May this year be filled with exciting adventures and cherished memories."
  },
  {
    id: 11,
    content:
      "Wishing you a fantastic birthday, dear sister! Your love and laughter make every moment special. May your year ahead be amazing."
  },
  {
    id: 12,
    content:
      "To my awesome sister, happy birthday! You are a shining star in my life. May your day be filled with love and laughter."
  },
  {
    id: 13,
    content:
      "Happy birthday to my lovely sister! Your heart is full of kindness. May your day be filled with all the things you adore."
  },
  {
    id: 14,
    content:
      "Wishing you a memorable birthday, sister! Your strength and wisdom inspire me every day. May this year be full of blessings."
  },
  {
    id: 15,
    content:
      "To my beautiful sister, happy birthday! You are a treasure in my life. May your special day bring you all the joy you give to others."
  },
  {
    id: 16,
    content:
      "Happy birthday! You bring sunshine into my life. May this year be filled with love, laughter, and all your dreams coming true."
  },
  {
    id: 17,
    content:
      "Wishing you a joyous birthday, sis! Your spirit and energy are contagious. May your day be filled with beautiful moments."
  },
  {
    id: 18,
    content:
      "To my dear sister, happy birthday! Your love is a gift I cherish every day. May this year be your best one yet."
  },
  {
    id: 19,
    content:
      "Happy birthday! You are a true blessing in my life. May your day be filled with happiness and your year with success."
  },
  {
    id: 20,
    content:
      "Wishing you an incredible birthday, sister! Your laughter is the best gift. May your special day be filled with all your favorite things."
  },
  {
    id: 21,
    content:
      "To my amazing sister, happy birthday! You light up every room you enter. May this year bring you everything you wish for."
  },
  {
    id: 22,
    content:
      "Happy birthday! Your courage and determination inspire me daily. May your special day be as remarkable as you are."
  },
  {
    id: 23,
    content:
      "Wishing you a fabulous birthday, dear sister! Your love and laughter are the best gifts. May your year ahead be full of joy."
  },
  {
    id: 24,
    content:
      "To my wonderful sister, happy birthday! You deserve all the happiness in the world. May your special day be unforgettable."
  },
  {
    id: 25,
    content:
      "Happy birthday! Your kindness and compassion are truly inspiring. May this year bring you as much joy as you give to others."
  },
  {
    id: 26,
    content:
      "Wishing you a joyful birthday, sister! Your spirit and positivity light up my life. May your day be filled with love and laughter."
  },
  {
    id: 27,
    content:
      "To my beloved sister, happy birthday! Your strength and wisdom guide me. May this year bring you all the happiness you deserve."
  },
  {
    id: 28,
    content:
      "Happy birthday! You are my rock and my best friend. May your day be filled with everything you love."
  },
  {
    id: 29,
    content:
      "Wishing you an amazing birthday, sis! Your laughter and joy are contagious. May this year bring you endless blessings."
  },
  {
    id: 30,
    content:
      "To my incredible sister, happy birthday! You are a shining light in my life. May your special day be as wonderful as you are."
  },
  {
    id: 31,
    content:
      "Happy birthday! Your love and support mean everything to me. May this year be filled with happiness and success."
  },
  {
    id: 32,
    content:
      "Wishing you a fabulous birthday, dear sister! Your kindness and spirit inspire everyone around you. May your day be filled with joy."
  },
  {
    id: 33,
    content:
      "To my lovely sister, happy birthday! You bring so much joy into my life. May this year bring you all your dreams and wishes."
  },
  {
    id: 34,
    content:
      "Happy birthday! Your strength and determination are truly inspiring. May your special day be filled with all the things you love."
  },
  {
    id: 35,
    content:
      "Wishing you a joyful birthday, sister! Your laughter and kindness are a gift to everyone. May your day be as bright as your spirit."
  },
  {
    id: 36,
    content:
      "To my dear sister, happy birthday! Your love is a treasure I cherish every day. May this year bring you happiness and success."
  },
  {
    id: 37,
    content:
      "Happy birthday! You are my confidante and best friend. May your special day be filled with love and laughter."
  },
  {
    id: 38,
    content:
      "Wishing you a wonderful birthday, sis! Your spirit and positivity inspire everyone around you. May this year be amazing."
  },
  {
    id: 39,
    content:
      "To my beautiful sister, happy birthday! You deserve all the happiness in the world. May your day be filled with joy and laughter."
  },
  {
    id: 40,
    content:
      "Happy birthday! Your kindness and generosity make the world a better place. May this year bring you everything you wish for."
  },
  {
    id: 41,
    content:
      "Wishing you an incredible birthday, sister! Your laughter brightens my days. May your special day be as amazing as you are."
  },
  {
    id: 42,
    content:
      "To my amazing sister, happy birthday! You are a shining star in my life. May this year bring you all the joy you seek."
  },
  {
    id: 43,
    content:
      "Happy birthday! Your love and support mean everything to me. May your day be filled with happiness and your year with success."
  },
  {
    id: 44,
    content:
      "Wishing you a fantastic birthday, dear sister! Your spirit and positivity uplift everyone around you. May this year be filled with joy."
  },
  {
    id: 45,
    content:
      "To my beloved sister, happy birthday! Your kindness and strength inspire me every day. May your special day be filled with all your favorite things."
  },
  {
    id: 46,
    content:
      "Happy birthday! You make every moment special with your love and laughter. May this year bring you all the happiness you deserve."
  },
  {
    id: 47,
    content:
      "Wishing you a joyful birthday, sis! Your spirit and energy bring so much joy to my life. May your day be filled with blessings."
  },
  {
    id: 48,
    content:
      "To my dear sister, happy birthday! Your support and love mean the world to me. May this year be filled with joy and laughter."
  },
  {
    id: 49,
    content:
      "Happy birthday! You are my rock and my best friend. May your day be as bright and beautiful as you are."
  },
  {
    id: 50,
    content:
      "Wishing you an amazing birthday, sister! Your laughter and joy make life so much brighter. May this year bring you endless happiness."
  },
  {
    id: 51,
    content:
      "Happy birthday, dear sister! Your heart is as big as the universe. May your day be filled with love, laughter, and all your favorite things."
  },
  {
    id: 52,
    content:
      "Wishing you a fabulous birthday! Your joy and kindness are a blessing in my life. May this year bring you everything you've been dreaming of."
  },
  {
    id: 53,
    content:
      "To my incredible sister, happy birthday! You are a constant source of strength and inspiration. May your special day be filled with love and happiness."
  },
  {
    id: 54,
    content:
      "Happy birthday! You have a unique way of brightening everyone's day. May your birthday be as special as you are to all of us."
  },
  {
    id: 55,
    content:
      "Wishing you a joyful birthday, sis! Your laughter is a melody that fills my heart with happiness. May this year be your best yet."
  },
  {
    id: 56,
    content:
      "To my lovely sister, happy birthday! You are a gift to everyone who knows you. May your special day be filled with joy and love."
  },
  {
    id: 57,
    content:
      "Happy birthday! Your dreams are worth chasing, and I believe in you completely. May this year bring you closer to all you desire."
  },
  {
    id: 58,
    content:
      "Wishing you an unforgettable birthday, sister! Your determination and passion are inspiring. May your day be as wonderful as your spirit."
  },
  {
    id: 59,
    content:
      "To my amazing sister, happy birthday! You light up my life in so many ways. May this year bring you endless opportunities and happiness."
  },
  {
    id: 60,
    content:
      "Happy birthday! You are a true gem, and I'm so lucky to have you as my sister. May your day be filled with all your heart desires."
  },
  {
    id: 61,
    content:
      "Wishing you a delightful birthday, dear sister! Your creativity and passion inspire me. May your year be filled with artistic adventures."
  },
  {
    id: 62,
    content:
      "To my wonderful sister, happy birthday! Your compassion and kindness make the world a better place. May your special day be truly magical."
  },
  {
    id: 63,
    content:
      "Happy birthday! You have a heart of gold, and I admire you for it. May this year bring you as much joy as you give to others."
  },
  {
    id: 64,
    content:
      "Wishing you a fabulous birthday, sister! Your enthusiasm for life is contagious. May your day be filled with excitement and love."
  },
  {
    id: 65,
    content:
      "To my beloved sister, happy birthday! Your laughter is the sweetest sound. May this year be filled with moments that make you smile."
  },
  {
    id: 66,
    content:
      "Happy birthday! You are my partner in crime and my confidante. May your special day be filled with adventure and fun."
  },
  {
    id: 67,
    content:
      "Wishing you a magical birthday, sis! Your imagination knows no bounds. May this year bring you endless possibilities."
  },
  {
    id: 68,
    content:
      "To my incredible sister, happy birthday! Your resilience is inspiring. May your day be filled with love and everything you cherish."
  },
  {
    id: 69,
    content:
      "Happy birthday! Your kindness makes a difference in the world. May this year be as amazing as you are."
  },
  {
    id: 70,
    content:
      "Wishing you an extraordinary birthday, dear sister! Your positivity is uplifting. May your special day be filled with joy and laughter."
  },
  {
    id: 71,
    content:
      "To my sweet sister, happy birthday! Your love brings warmth to my heart. May this year be filled with happiness and cherished moments."
  },
  {
    id: 72,
    content:
      "Happy birthday! You have a special place in my heart. May your day be as wonderful as the bond we share."
  },
  {
    id: 73,
    content:
      "Wishing you a beautiful birthday, sister! Your energy lights up my life. May this year bring you joy and fulfillment."
  },
  {
    id: 74,
    content:
      "To my dearest sister, happy birthday! Your spirit is a gift to the world. May your special day be filled with love and happiness."
  },
  {
    id: 75,
    content:
      "Happy birthday! Your love is a treasure that I cherish every day. May this year bring you everything you've ever wished for."
  },
  {
    id: 76,
    content:
      "Wishing you a fantastic birthday, sis! Your joy is contagious. May your day be filled with laughter and unforgettable memories."
  },
  {
    id: 77,
    content:
      "To my amazing sister, happy birthday! Your heart is as beautiful as your soul. May this year bring you love and success."
  },
  {
    id: 78,
    content:
      "Happy birthday! Your dreams are waiting for you. May this year be filled with opportunities to make them a reality."
  },
  {
    id: 79,
    content:
      "Wishing you a memorable birthday, sister! Your love and laughter make my life brighter. May your special day be filled with joy."
  },
  {
    id: 80,
    content:
      "To my incredible sister, happy birthday! You inspire me every day. May this year be filled with amazing adventures."
  },
  {
    id: 81,
    content:
      "Happy birthday! Your kindness and strength shine through in everything you do. May your day be filled with love and joy."
  },
  {
    id: 82,
    content:
      "Wishing you a delightful birthday, dear sister! Your creativity and passion are inspiring. May this year be filled with artistic adventures."
  },
  {
    id: 83,
    content:
      "To my beloved sister, happy birthday! Your laughter brings joy to my heart. May this year be filled with beautiful moments."
  },
  {
    id: 84,
    content:
      "Happy birthday! Your compassion and kindness touch the lives of everyone around you. May this year bring you all the happiness you deserve."
  },
  {
    id: 85,
    content:
      "Wishing you a fabulous birthday, sister! Your positivity is contagious. May your day be filled with excitement and joy."
  },
  {
    id: 86,
    content:
      "To my wonderful sister, happy birthday! Your spirit brings light to my life. May your special day be as amazing as you are."
  },
  {
    id: 87,
    content:
      "Happy birthday! You have a heart of gold, and I admire you for it. May this year bring you as much joy as you give to others."
  },
  {
    id: 88,
    content:
      "Wishing you a joyful birthday, sis! Your energy lights up every room. May your day be filled with love and laughter."
  },
  {
    id: 89,
    content:
      "To my dear sister, happy birthday! Your strength and wisdom inspire me. May this year be filled with happiness and success."
  },
  {
    id: 90,
    content:
      "Happy birthday! You are my rock and my best friend. May your day be filled with everything you love."
  },
  {
    id: 91,
    content:
      "Wishing you an amazing birthday, sister! Your laughter makes life so much brighter. May this year bring you endless happiness."
  },
  {
    id: 92,
    content:
      "To my incredible sister, happy birthday! You are a shining light in my life. May this year bring you everything you've ever wished for."
  },
  {
    id: 93,
    content:
      "Happy birthday! Your dreams are worth pursuing, and I believe in you completely. May this year bring you closer to all you desire."
  },
  {
    id: 94,
    content:
      "Wishing you a wonderful birthday, sis! Your joy and kindness inspire me. May your day be filled with love and happiness."
  },
  {
    id: 95,
    content:
      "To my lovely sister, happy birthday! You are a treasure in my life. May your special day be filled with all the joy you bring to others."
  },
  {
    id: 96,
    content:
      "Happy birthday! You light up every room you enter. May this year be filled with laughter and cherished moments."
  },
  {
    id: 97,
    content:
      "Wishing you a delightful birthday, dear sister! Your spirit and positivity uplift everyone around you. May your year be amazing."
  },
  {
    id: 98,
    content:
      "To my beautiful sister, happy birthday! Your love brings warmth to my heart. May this year be filled with joy and cherished memories."
  },
  {
    id: 99,
    content:
      "Happy birthday! You have a special place in my heart. May your day be as wonderful as the bond we share."
  },
  {
    id: 100,
    content:
      "Wishing you a beautiful birthday, sister! Your laughter and joy brighten my days. May this year bring you everything you've ever wanted."
  }
];

const bestfriend = [
  {
    id: 1,
    content:
      "Happy birthday to my best friend! Your friendship means the world to me. May your day be filled with love, laughter, and unforgettable moments."
  },
  {
    id: 2,
    content:
      "To my amazing best friend, on your special day: thank you for always being there for me. May this year bring you endless joy and happiness!"
  },
  {
    id: 3,
    content:
      "Happy birthday, dear friend! Your kindness and laughter light up my life. I hope this year brings you all the happiness you deserve."
  },
  {
    id: 4,
    content:
      "Wishing my best friend a fantastic birthday! Your adventurous spirit and positive attitude make life so much fun. May this year be filled with new experiences."
  },
  {
    id: 5,
    content:
      "Happy birthday to my incredible friend! Your laughter is contagious. May your special day be as wonderful and unique as you are!"
  },
  {
    id: 6,
    content:
      "Dear best friend, on your birthday, I want you to know how much I appreciate you. Your support and love mean everything to me. Enjoy your day!"
  },
  {
    id: 7,
    content:
      "Happy birthday, bestie! Your strength and positivity inspire me every day. May this year bring you success and happiness."
  },
  {
    id: 8,
    content:
      "To my amazing friend, happy birthday! You are a ray of sunshine in my life. May your day be filled with love and joy."
  },
  {
    id: 9,
    content:
      "Wishing you a fantastic birthday, dear friend! Your laughter brings so much joy to my life. May this year be filled with blessings."
  },
  {
    id: 10,
    content:
      "Happy birthday to a friend who always knows how to make me smile! May your day be filled with love, laughter, and beautiful memories."
  },
  {
    id: 11,
    content:
      "To my sweet friend, on your special day, I wish you all the love and happiness in the world. Keep shining your light!"
  },
  {
    id: 12,
    content:
      "Happy birthday, bestie! Your adventurous spirit inspires me to embrace life. May this year be filled with exciting new journeys."
  },
  {
    id: 13,
    content:
      "Dear friend, on your birthday, I want you to know how much you mean to me. May your day be filled with love and laughter."
  },
  {
    id: 14,
    content:
      "Wishing my best friend a very happy birthday! Your positivity is infectious. May this year bring you joy and adventure."
  },
  {
    id: 15,
    content:
      "Happy birthday to a friend who knows how to make life fun! Your friendship is a treasure. May your day be as amazing as you are!"
  },
  {
    id: 16,
    content:
      "To my beloved friend, your friendship is a blessing I cherish every day. May your birthday be as special and wonderful as you are!"
  },
  {
    id: 17,
    content:
      "Happy birthday, dear friend! Your adventurous soul brings so much joy to my life. May this year be filled with new experiences!"
  },
  {
    id: 18,
    content:
      "Wishing you a fabulous birthday, my best friend! Your heart is full of love. May this year bring you all the happiness you deserve."
  },
  {
    id: 19,
    content:
      "Happy birthday to my incredible friend! Your laughter is a gift. May your special day be filled with joy and love."
  },
  {
    id: 20,
    content:
      "To my best friend, you are a true gift in my life. I appreciate your support and love. May your birthday be filled with joy!"
  },
  {
    id: 21,
    content:
      "Happy birthday, bestie! Your positive energy lifts my spirits. May this year be filled with love, joy, and beautiful memories."
  },
  {
    id: 22,
    content:
      "Dear friend, on your special day, I wish you all the happiness in the world. May your birthday be as wonderful as you are!"
  },
  {
    id: 23,
    content:
      "Wishing my best friend a very happy birthday! Your laughter and joy light up my life. May this year be filled with love and adventure."
  },
  {
    id: 24,
    content:
      "Happy birthday to my incredible friend! Your spirit and enthusiasm are infectious. May this year be filled with exciting new journeys."
  },
  {
    id: 25,
    content:
      "To my best friend, you are a true treasure in my life. I appreciate every moment we share. May your birthday be filled with happiness!"
  },
  {
    id: 26,
    content:
      "Happy birthday, bestie! Your laughter and joy bring sunshine to my life. May this year be filled with happiness and adventure."
  },
  {
    id: 27,
    content:
      "Wishing you a very happy birthday, my friend! Your spirit and positivity light up our lives. May this year be filled with love."
  },
  {
    id: 28,
    content:
      "Happy birthday to my best friend! Your friendship is a light in my life. May your special day be filled with joy and love."
  },
  {
    id: 29,
    content:
      "To my amazing friend, you are a source of inspiration. I’m grateful for your friendship. May your birthday be filled with joy!"
  },
  {
    id: 30,
    content:
      "Happy birthday, dear friend! Your adventurous spirit and positive attitude bring joy to my life. May this year be filled with happiness."
  },
  {
    id: 31,
    content:
      "Wishing my best friend a fantastic birthday! Your laughter and joy make every day brighter. May this year be filled with love."
  },
  {
    id: 32,
    content:
      "Happy birthday to my incredible friend! Your support means the world to me. May your day be filled with joy and happiness."
  },
  {
    id: 33,
    content:
      "To my best friend, you are a true friend. I appreciate everything you do. May your birthday be filled with love and joy!"
  },
  {
    id: 34,
    content:
      "Happy birthday, bestie! Your positive energy lifts my spirits. May this year be filled with love, joy, and beautiful memories."
  },
  {
    id: 35,
    content:
      "Dear friend, on your special day, I wish you all the happiness in the world. May your birthday be as wonderful as you are!"
  },
  {
    id: 36,
    content:
      "Wishing my best friend a very happy birthday! Your laughter is a gift. May your special day be filled with joy and love."
  },
  {
    id: 37,
    content:
      "Happy birthday to a friend who knows how to make life beautiful! May your day be filled with laughter, love, and unforgettable moments."
  },
  {
    id: 38,
    content:
      "To my wonderful friend, you are a light in my life. I’m grateful for your friendship. May your birthday be as amazing as you are!"
  },
  {
    id: 39,
    content:
      "Happy birthday, bestie! Your positive energy lifts my spirits. May this year be filled with love, joy, and beautiful memories."
  },
  {
    id: 40,
    content:
      "Dear friend, on your special day, I wish you all the happiness in the world. May your birthday be as wonderful as you are!"
  },
  {
    id: 41,
    content:
      "Happy birthday to my best friend! Your laughter and joy light up my life. May your day be filled with beautiful moments and cherished memories."
  },
  {
    id: 42,
    content:
      "To my dear friend, you make every day brighter with your smile. Wishing you a birthday filled with love, happiness, and all your heart desires."
  },
  {
    id: 43,
    content:
      "Happy birthday, bestie! Your friendship is a treasure I cherish. May this special day bring you all the joy you bring to others."
  },
  {
    id: 44,
    content:
      "Dear friend, on your birthday, I want you to know how much you mean to me. Your kindness and support make the world a better place."
  },
  {
    id: 45,
    content:
      "Wishing my best friend a fantastic birthday! May your day be as amazing and wonderful as you are. Enjoy every moment!"
  },
  {
    id: 46,
    content:
      "Happy birthday to the person who knows me inside out! I’m grateful for your friendship every day. May this year bring you joy and success."
  },
  {
    id: 47,
    content:
      "To my best friend, your spirit and positivity inspire me to be better. May your birthday be filled with love and unforgettable memories."
  },
  {
    id: 48,
    content:
      "Happy birthday, dear friend! Your laughter is a melody I cherish. May your special day be filled with joy and all the things you love."
  },
  {
    id: 49,
    content:
      "Wishing my best friend a happy birthday! Your heart is full of love, and I’m lucky to have you in my life. Enjoy your day!"
  },
  {
    id: 50,
    content:
      "Happy birthday to my wonderful friend! Your friendship is a gift I treasure. May your day be filled with laughter, love, and happiness."
  },
  {
    id: 51,
    content:
      "To my best friend, you deserve all the happiness in the world. May your birthday be filled with joy, love, and countless blessings."
  },
  {
    id: 52,
    content:
      "Happy birthday, bestie! Your adventurous spirit is contagious. May this year bring you exciting new experiences and unforgettable moments."
  },
  {
    id: 53,
    content:
      "Dear friend, on your special day, I celebrate you! Your friendship means everything to me. Wishing you a year filled with love and laughter."
  },
  {
    id: 54,
    content:
      "Wishing you a fantastic birthday, my dear friend! Your kindness and support are invaluable. May your day be as amazing as you are!"
  },
  {
    id: 55,
    content:
      "Happy birthday to my incredible friend! Your spirit is inspiring. May this year be filled with love, joy, and endless adventures."
  },
  {
    id: 56,
    content:
      "To my best friend, your friendship is a ray of sunshine in my life. May your birthday be filled with love, laughter, and all your favorite things."
  },
  {
    id: 57,
    content:
      "Happy birthday, bestie! Your positivity and energy light up my world. May this year bring you all the joy you deserve."
  },
  {
    id: 58,
    content:
      "Dear friend, on your birthday, I wish you happiness, health, and success. You are a blessing in my life, and I cherish our friendship."
  },
  {
    id: 59,
    content:
      "Wishing my best friend a very happy birthday! Your laughter and joy make every moment special. May your day be filled with love."
  },
  {
    id: 60,
    content:
      "Happy birthday to a friend who always knows how to bring a smile! May your special day be filled with beautiful moments and joy."
  },
  {
    id: 61,
    content:
      "To my wonderful friend, your friendship is a treasure I hold dear. May your birthday be filled with love, laughter, and cherished memories."
  },
  {
    id: 62,
    content:
      "Happy birthday, dear friend! Your laughter and kindness brighten my life. May this year bring you happiness and all your heart desires."
  },
  {
    id: 63,
    content:
      "Wishing my best friend a fantastic birthday! Your adventurous spirit and positive energy inspire me every day. Enjoy your special day!"
  },
  {
    id: 64,
    content:
      "Happy birthday to my incredible friend! Your support means the world to me. May your day be filled with joy and all your dreams come true."
  },
  {
    id: 65,
    content:
      "To my best friend, your friendship is a gift I cherish every day. May your birthday be filled with happiness, love, and unforgettable memories."
  },
  {
    id: 66,
    content:
      "Happy birthday, bestie! Your spirit and enthusiasm make life so much fun. May this year be filled with love, joy, and adventure."
  },
  {
    id: 67,
    content:
      "Dear friend, on your special day, I celebrate you and our friendship. May your birthday be as wonderful and amazing as you are!"
  },
  {
    id: 68,
    content:
      "Wishing my best friend a very happy birthday! Your laughter and joy light up my life. May this year bring you happiness and success."
  },
  {
    id: 69,
    content:
      "Happy birthday to my amazing friend! Your positivity and kindness inspire me every day. May your day be filled with love and joy."
  },
  {
    id: 70,
    content:
      "To my best friend, you are a true blessing in my life. I appreciate every moment we share. May your birthday be filled with happiness!"
  },
  {
    id: 71,
    content:
      "Happy birthday, bestie! Your laughter is a gift I treasure. May your special day be filled with joy, love, and beautiful memories."
  },
  {
    id: 72,
    content:
      "Dear friend, on your birthday, I wish you all the happiness in the world. May your special day be as amazing as you are!"
  },
  {
    id: 73,
    content:
      "Wishing my best friend a fantastic birthday! Your heart is full of love. May this year be filled with joy and adventure."
  },
  {
    id: 74,
    content:
      "Happy birthday to my incredible friend! Your spirit and positivity bring joy to my life. May this year be filled with happiness."
  },
  {
    id: 75,
    content:
      "To my best friend, you are a light in my life. I’m grateful for your friendship. May your birthday be as wonderful as you are!"
  },
  {
    id: 76,
    content:
      "Happy birthday, dear friend! Your laughter is contagious. May your special day be filled with joy and love."
  },
  {
    id: 77,
    content:
      "Wishing my best friend a very happy birthday! Your adventurous spirit inspires me to embrace life. Enjoy your special day!"
  },
  {
    id: 78,
    content:
      "Happy birthday to my wonderful friend! Your friendship is a treasure. May your day be filled with joy, laughter, and love."
  },
  {
    id: 79,
    content:
      "To my best friend, you are an inspiration to me. I appreciate everything you do. May your birthday be filled with happiness!"
  },
  {
    id: 80,
    content:
      "Happy birthday, bestie! Your positivity and joy light up my life. May this year bring you all the happiness you deserve."
  },
  {
    id: 81,
    content:
      "Dear friend, on your special day, I wish you all the joy in the world. May your birthday be as incredible as you are!"
  },
  {
    id: 82,
    content:
      "Wishing my best friend a fantastic birthday! Your laughter is a gift I cherish. May your special day be filled with joy and love."
  },
  {
    id: 83,
    content:
      "Happy birthday to a friend who brings so much joy to my life! May your day be filled with happiness and beautiful moments."
  },
  {
    id: 84,
    content:
      "To my wonderful friend, your spirit and energy make life brighter. May your birthday be filled with love, laughter, and joy."
  },
  {
    id: 85,
    content:
      "Happy birthday, dear friend! Your laughter is a melody I cherish. May your special day be filled with love and joy."
  },
  {
    id: 86,
    content:
      "Wishing my best friend a very happy birthday! Your kindness and positivity inspire me every day. Enjoy your special day!"
  },
  {
    id: 87,
    content:
      "Happy birthday to my incredible friend! Your support means the world to me. May your day be filled with joy and happiness."
  },
  {
    id: 88,
    content:
      "To my best friend, you are a true gift in my life. I appreciate every moment we share. May your birthday be filled with happiness!"
  },
  {
    id: 89,
    content:
      "Happy birthday, bestie! Your spirit and positivity bring joy to my life. May this year be filled with love and adventure."
  },
  {
    id: 90,
    content:
      "Dear friend, on your birthday, I wish you all the happiness in the world. May your special day be as wonderful and amazing as you are!"
  },
  {
    id: 91,
    content:
      "Wishing my best friend a fantastic birthday! Your heart is full of love. May this year be filled with joy and adventure."
  },
  {
    id: 92,
    content:
      "Happy birthday to my incredible friend! Your spirit and positivity bring joy to my life. May this year be filled with happiness."
  },
  {
    id: 93,
    content:
      "To my best friend, you are a light in my life. I’m grateful for your friendship. May your birthday be as wonderful as you are!"
  },
  {
    id: 94,
    content:
      "Happy birthday, dear friend! Your laughter is contagious. May your special day be filled with joy and love."
  },
  {
    id: 95,
    content:
      "Wishing my best friend a very happy birthday! Your adventurous spirit inspires me to embrace life. Enjoy your special day!"
  },
  {
    id: 96,
    content:
      "Happy birthday to my wonderful friend! Your friendship is a treasure. May your day be filled with joy, laughter, and love."
  },
  {
    id: 97,
    content:
      "To my best friend, you are an inspiration to me. I appreciate everything you do. May your birthday be filled with happiness!"
  },
  {
    id: 98,
    content:
      "Happy birthday, bestie! Your positivity and joy light up my life. May this year bring you all the happiness you deserve."
  },
  {
    id: 99,
    content:
      "Dear friend, on your special day, I wish you all the joy in the world. May your birthday be as incredible as you are!"
  },
  {
    id: 100,
    content:
      "Wishing my best friend a fantastic birthday! Your laughter is a gift I cherish. May your special day be filled with joy and love."
  }
];

const boyfriend = [
  {
    id: 1,
    content:
      "Happy birthday to my amazing boyfriend! You bring so much joy and love into my life. May your day be filled with all the happiness you deserve."
  },
  {
    id: 2,
    content:
      "To the love of my life, happy birthday! Your presence makes every moment special. May this year bring you endless joy and success."
  },
  {
    id: 3,
    content:
      "Happy birthday, sweetheart! You are my rock and my greatest adventure. Wishing you a day filled with love and laughter."
  },
  {
    id: 4,
    content:
      "To my boyfriend, happy birthday! You make my life complete. May your birthday be filled with all the things that make you smile."
  },
  {
    id: 5,
    content:
      "Happy birthday to the one who holds my heart! Your love is a precious gift. May your special day be filled with joy and beautiful memories."
  },
  {
    id: 6,
    content:
      "To my dearest boyfriend, happy birthday! Your kindness and support mean the world to me. May this year bring you everything you desire."
  },
  {
    id: 7,
    content:
      "Happy birthday, love! You light up my life in every way. May your day be as wonderful and amazing as you are."
  },
  {
    id: 8,
    content:
      "To my boyfriend, on your special day, I want you to know how much you mean to me. May your birthday be filled with love and happiness."
  },
  {
    id: 9,
    content:
      "Happy birthday to my incredible boyfriend! Your smile brightens my day. May this year bring you all the joy and success you deserve."
  },
  {
    id: 10,
    content:
      "To the man I love, happy birthday! You make every day brighter with your laughter. May your special day be filled with love and joy."
  },
  {
    id: 11,
    content:
      "Happy birthday, darling! Your love is my greatest treasure. May your birthday be filled with wonderful moments and cherished memories."
  },
  {
    id: 12,
    content:
      "To my sweet boyfriend, happy birthday! Your presence fills my life with joy. May your day be as special as you are to me."
  },
  {
    id: 13,
    content:
      "Happy birthday to my wonderful boyfriend! Your love inspires me every day. May this year bring you happiness and all your dreams come true."
  },
  {
    id: 14,
    content:
      "To the one I adore, happy birthday! You are my partner in everything. May your birthday be filled with joy, laughter, and love."
  },
  {
    id: 15,
    content:
      "Happy birthday, my love! You bring so much joy into my life. May your special day be filled with all your favorite things."
  },
  {
    id: 16,
    content:
      "To my boyfriend, on your birthday, I celebrate you and the love we share. May your day be filled with happiness and cherished moments."
  },
  {
    id: 17,
    content:
      "Happy birthday to my amazing boyfriend! Your love is a gift I cherish. May this year be filled with adventure and joy."
  },
  {
    id: 18,
    content:
      "To my dear boyfriend, happy birthday! You make my heart sing with happiness. May your special day be filled with love and laughter."
  },
  {
    id: 19,
    content:
      "Happy birthday, love! Your kindness and support are everything to me. May your day be filled with joy and all the things you love."
  },
  {
    id: 20,
    content:
      "To my boyfriend, on your special day, I wish you all the happiness in the world. May your birthday be as wonderful as you are!"
  },
  {
    id: 21,
    content:
      "Happy birthday to the love of my life! You make every day brighter. May this year bring you happiness and success."
  },
  {
    id: 22,
    content:
      "To my sweet boyfriend, happy birthday! Your love fills my heart with joy. May your special day be as amazing as you are."
  },
  {
    id: 23,
    content:
      "Happy birthday, my love! You are my everything. May your day be filled with love, laughter, and all your favorite things."
  },
  {
    id: 24,
    content:
      "To my incredible boyfriend, happy birthday! Your smile lights up my life. May this year be filled with joy and wonderful memories."
  },
  {
    id: 25,
    content:
      "Happy birthday to my amazing boyfriend! Your love is my greatest treasure. May your special day be filled with happiness and laughter."
  },
  {
    id: 26,
    content:
      "To the one I love, happy birthday! You make every moment special. May your birthday be filled with joy, love, and cherished memories."
  },
  {
    id: 27,
    content:
      "Happy birthday, sweetheart! Your laughter is music to my ears. May this year bring you all the joy and success you deserve."
  },
  {
    id: 28,
    content:
      "To my boyfriend, on your birthday, I celebrate you and the love we share. May your day be filled with happiness and love."
  },
  {
    id: 29,
    content:
      "Happy birthday to my wonderful boyfriend! Your presence makes my life complete. May your special day be filled with joy and laughter."
  },
  {
    id: 30,
    content:
      "To my love, happy birthday! You are my greatest adventure. May this year be filled with happiness and all your dreams come true."
  },
  {
    id: 31,
    content:
      "Happy birthday, darling! Your love is a precious gift. May your day be filled with wonderful moments and cherished memories."
  },
  {
    id: 32,
    content:
      "To my sweet boyfriend, happy birthday! Your kindness and support mean the world to me. May this year bring you everything you desire."
  },
  {
    id: 33,
    content:
      "Happy birthday to the one who holds my heart! You bring so much joy into my life. May your birthday be filled with happiness."
  },
  {
    id: 34,
    content:
      "To my boyfriend, happy birthday! You make every day brighter with your love. May this year be filled with adventure and joy."
  },
  {
    id: 35,
    content:
      "Happy birthday, love! You light up my life in every way. May your day be as wonderful and amazing as you are."
  },
  {
    id: 36,
    content:
      "To the man I love, happy birthday! Your smile brings happiness to my heart. May your special day be filled with love and laughter."
  },
  {
    id: 37,
    content:
      "Happy birthday, sweetheart! You are my rock and my greatest adventure. Wishing you a day filled with joy and happiness."
  },
  {
    id: 38,
    content:
      "To my boyfriend, happy birthday! Your love is a gift I cherish every day. May your day be filled with all your favorite things."
  },
  {
    id: 39,
    content:
      "Happy birthday to my amazing boyfriend! You bring so much joy into my life. May your birthday be filled with all the love you deserve."
  },
  {
    id: 40,
    content:
      "To my dearest boyfriend, happy birthday! Your kindness and support mean everything to me. May this year bring you happiness and success."
  },
  {
    id: 41,
    content:
      "Happy birthday, love! You light up my life in every way. May your special day be filled with joy and laughter."
  },
  {
    id: 42,
    content:
      "To my boyfriend, on your birthday, I want you to know how much you mean to me. May your day be filled with love and happiness."
  },
  {
    id: 43,
    content:
      "Happy birthday to my incredible boyfriend! Your smile brightens my day. May this year bring you all the joy and success you deserve."
  },
  {
    id: 44,
    content:
      "To the one I love, happy birthday! You make every day brighter with your laughter. May your special day be filled with love and joy."
  },
  {
    id: 45,
    content:
      "Happy birthday, darling! Your love is my greatest treasure. May your birthday be filled with wonderful moments and cherished memories."
  },
  {
    id: 46,
    content:
      "To my sweet boyfriend, happy birthday! Your presence fills my life with joy. May your day be as special as you are to me."
  },
  {
    id: 47,
    content:
      "Happy birthday to my wonderful boyfriend! Your love inspires me every day. May this year bring you happiness and all your dreams come true."
  },
  {
    id: 48,
    content:
      "To the one I adore, happy birthday! You are my partner in everything. May your birthday be filled with joy, laughter, and love."
  },
  {
    id: 49,
    content:
      "Happy birthday, my love! You are my everything. May your day be filled with love, laughter, and all your favorite things."
  },
  {
    id: 50,
    content:
      "To my incredible boyfriend, happy birthday! Your smile lights up my life. May this year be filled with joy and wonderful memories."
  },
  {
    id: 51,
    content:
      "Happy birthday to my amazing boyfriend! Your love is my greatest treasure. May your special day be filled with happiness and laughter."
  },
  {
    id: 52,
    content:
      "To the one I love, happy birthday! You make every moment special. May your birthday be filled with joy, love, and cherished memories."
  },
  {
    id: 53,
    content:
      "Happy birthday, sweetheart! Your laughter is music to my ears. May this year bring you all the joy and success you deserve."
  },
  {
    id: 54,
    content:
      "To my boyfriend, on your birthday, I celebrate you and the love we share. May your day be filled with happiness and love."
  },
  {
    id: 55,
    content:
      "Happy birthday to my wonderful boyfriend! Your presence makes my life complete. May your special day be filled with joy and laughter."
  },
  {
    id: 56,
    content:
      "To my love, happy birthday! You are my greatest adventure. May this year be filled with happiness and all your dreams come true."
  },
  {
    id: 57,
    content:
      "Happy birthday, darling! Your love is a precious gift. May your day be filled with wonderful moments and cherished memories."
  },
  {
    id: 58,
    content:
      "To my sweet boyfriend, happy birthday! Your kindness and support mean the world to me. May this year bring you everything you desire."
  },
  {
    id: 59,
    content:
      "Happy birthday to the one who holds my heart! You bring so much joy into my life. May your birthday be filled with happiness."
  },
  {
    id: 60,
    content:
      "To my boyfriend, happy birthday! You make every day brighter with your love. May this year be filled with adventure and joy."
  },
  {
    id: 61,
    content:
      "Happy birthday, love! You light up my life in every way. May your day be as wonderful and amazing as you are."
  },
  {
    id: 62,
    content:
      "To the man I love, happy birthday! Your smile brings happiness to my heart. May your special day be filled with love and laughter."
  },
  {
    id: 63,
    content:
      "Happy birthday, sweetheart! You are my rock and my greatest adventure. Wishing you a day filled with joy and happiness."
  },
  {
    id: 64,
    content:
      "To my boyfriend, happy birthday! Your love is a gift I cherish every day. May your day be filled with all your favorite things."
  },
  {
    id: 65,
    content:
      "Happy birthday to my amazing boyfriend! You bring so much joy into my life. May your birthday be filled with all the love you deserve."
  },
  {
    id: 66,
    content:
      "To my dearest boyfriend, happy birthday! Your kindness and support mean everything to me. May this year bring you happiness and success."
  },
  {
    id: 67,
    content:
      "Happy birthday, love! You light up my life in every way. May your special day be filled with joy and laughter."
  },
  {
    id: 68,
    content:
      "To my boyfriend, on your birthday, I want you to know how much you mean to me. May your day be filled with love and happiness."
  },
  {
    id: 69,
    content:
      "Happy birthday to my incredible boyfriend! Your smile brightens my day. May this year bring you all the joy and success you deserve."
  },
  {
    id: 70,
    content:
      "To the one I love, happy birthday! You make every day brighter with your laughter. May your special day be filled with love and joy."
  },
  {
    id: 71,
    content:
      "Happy birthday, darling! Your love is my greatest treasure. May your birthday be filled with wonderful moments and cherished memories."
  },
  {
    id: 72,
    content:
      "To my sweet boyfriend, happy birthday! Your presence fills my life with joy. May your day be as special as you are to me."
  },
  {
    id: 73,
    content:
      "Happy birthday to my wonderful boyfriend! Your love inspires me every day. May this year bring you happiness and all your dreams come true."
  },
  {
    id: 74,
    content:
      "To the one I adore, happy birthday! You are my partner in everything. May your birthday be filled with joy, laughter, and love."
  },
  {
    id: 75,
    content:
      "Happy birthday, my love! You are my everything. May your day be filled with love, laughter, and all your favorite things."
  },
  {
    id: 76,
    content:
      "To my incredible boyfriend, happy birthday! Your smile lights up my life. May this year be filled with joy and wonderful memories."
  },
  {
    id: 77,
    content:
      "Happy birthday to my amazing boyfriend! Your love is my greatest treasure. May your special day be filled with happiness and laughter."
  },
  {
    id: 78,
    content:
      "To the one I love, happy birthday! You make every moment special. May your birthday be filled with joy, love, and cherished memories."
  },
  {
    id: 79,
    content:
      "Happy birthday, sweetheart! Your laughter is music to my ears. May this year bring you all the joy and success you deserve."
  },
  {
    id: 80,
    content:
      "To my boyfriend, on your birthday, I celebrate you and the love we share. May your day be filled with happiness and love."
  },
  {
    id: 81,
    content:
      "Happy birthday to my wonderful boyfriend! Your presence makes my life complete. May your special day be filled with joy and laughter."
  },
  {
    id: 82,
    content:
      "To my love, happy birthday! You are my greatest adventure. May this year be filled with happiness and all your dreams come true."
  },
  {
    id: 83,
    content:
      "Happy birthday, darling! Your love is a precious gift. May your day be filled with wonderful moments and cherished memories."
  },
  {
    id: 84,
    content:
      "To my sweet boyfriend, happy birthday! Your kindness and support mean the world to me. May this year bring you everything you desire."
  },
  {
    id: 85,
    content:
      "Happy birthday to the one who holds my heart! You bring so much joy into my life. May your birthday be filled with happiness."
  },
  {
    id: 86,
    content:
      "To my boyfriend, happy birthday! You make every day brighter with your love. May this year be filled with adventure and joy."
  },
  {
    id: 87,
    content:
      "Happy birthday, love! You light up my life in every way. May your day be as wonderful and amazing as you are."
  },
  {
    id: 88,
    content:
      "To the man I love, happy birthday! Your smile brings happiness to my heart. May your special day be filled with love and laughter."
  },
  {
    id: 89,
    content:
      "Happy birthday, sweetheart! You are my rock and my greatest adventure. Wishing you a day filled with joy and happiness."
  },
  {
    id: 90,
    content:
      "To my boyfriend, happy birthday! Your love is a gift I cherish every day. May your day be filled with all your favorite things."
  },
  {
    id: 91,
    content:
      "Happy birthday to my amazing boyfriend! You bring so much joy into my life. May your birthday be filled with all the love you deserve."
  },
  {
    id: 92,
    content:
      "To my dearest boyfriend, happy birthday! Your kindness and support mean everything to me. May this year bring you happiness and success."
  },
  {
    id: 93,
    content:
      "Happy birthday, love! You light up my life in every way. May your special day be filled with joy and laughter."
  },
  {
    id: 94,
    content:
      "To my boyfriend, on your birthday, I want you to know how much you mean to me. May your day be filled with love and happiness."
  },
  {
    id: 95,
    content:
      "Happy birthday to my incredible boyfriend! Your smile brightens my day. May this year bring you all the joy and success you deserve."
  },
  {
    id: 96,
    content:
      "To the one I love, happy birthday! You make every day brighter with your laughter. May your special day be filled with love and joy."
  },
  {
    id: 97,
    content:
      "Happy birthday, darling! Your love is my greatest treasure. May your birthday be filled with wonderful moments and cherished memories."
  },
  {
    id: 98,
    content:
      "To my sweet boyfriend, happy birthday! Your presence fills my life with joy. May your day be as special as you are to me."
  },
  {
    id: 99,
    content:
      "Happy birthday to my wonderful boyfriend! Your love inspires me every day. May this year bring you happiness and all your dreams come true."
  },
  {
    id: 100,
    content:
      "To the one I adore, happy birthday! You are my partner in everything. May your birthday be filled with joy, laughter, and love."
  }
];

const girlfriend = [
  {
    id: 1,
    content:
      "Happy birthday to the love of my life! You are my sunshine on the cloudiest days, and your laughter fills my heart with joy. May this special day be filled with sweet surprises, cherished moments, and the warmth of my love for you. You deserve all the happiness in the world! 🌹💕"
  },
  {
    id: 2,
    content:
      "To my beautiful girlfriend, happy birthday! Every day with you is a new adventure, and I'm so grateful to have you by my side. May your birthday be as wonderful as your smile, as enchanting as your spirit, and as loving as your heart. I love you endlessly! 💖🎉"
  },
  {
    id: 3,
    content:
      "Happy birthday, my darling! Your love is like a melody that plays in my heart, bringing me peace and joy. On this special day, I wish you all the love and happiness you bring into my life. You are my dream come true, and I can't wait to celebrate many more birthdays with you! 🎂💘"
  },
  {
    id: 4,
    content:
      "To my sweetest girlfriend, happy birthday! You are the reason for my smile and the anchor in my life. May this day bring you as much joy as you have given me. You are loved beyond words, and I am so thankful to have you in my life. Enjoy every moment! 🌷❤️"
  },
  {
    id: 5,
    content:
      "Happy birthday to my amazing girlfriend! Your kindness, strength, and beauty inspire me every day. May your birthday be filled with all the things you love, surrounded by friends and family who cherish you as much as I do. You are my everything! 🌟💞"
  },
  {
    id: 6,
    content:
      "To my love, happy birthday! You light up my world in ways I never knew were possible. May your special day be filled with laughter, joy, and all your favorite things. Remember, you are always in my heart, and I am here to celebrate you today and always! 🎈💝"
  },
  {
    id: 7,
    content:
      "Happy birthday, sweetheart! Your love is a treasure I hold dear. On this day, I wish you endless happiness, unforgettable moments, and all the love your heart can hold. You deserve the best of everything, and I am so lucky to call you mine! 🎁❤️"
  },
  {
    id: 8,
    content:
      "To my precious girlfriend, happy birthday! You are the light in my life and the love of my heart. May this birthday bring you as much joy as you have brought into my life. Let's make wonderful memories together today! 🌼💗"
  },
  {
    id: 9,
    content:
      "Happy birthday to the girl who stole my heart! Your laughter is music to my soul, and your happiness is my priority. May your birthday be filled with love, laughter, and the company of those who adore you. You are simply amazing! 🥳💖"
  },
  {
    id: 10,
    content:
      "To my wonderful girlfriend, happy birthday! Your beauty, inside and out, continues to amaze me. May this day be as special as you are, filled with joy, love, and sweet surprises. I promise to make every moment unforgettable! 🎊💓"
  },
  {
    id: 11,
    content:
      "Happy birthday, my love! Your presence in my life is a gift I cherish every day. May your birthday be filled with all the things that make you smile and all the love that fills your heart. You deserve all the happiness in the world! 🌸💖"
  },
  {
    id: 12,
    content:
      "To my lovely girlfriend, happy birthday! You have a heart of gold and a spirit that lights up every room. On your special day, I wish you endless joy, laughter, and love. May all your dreams come true, because you are worthy of the very best! 🎈❤️"
  },
  {
    id: 13,
    content:
      "Happy birthday to my dearest girlfriend! You are my partner, my confidant, and my greatest supporter. May this year bring you as much happiness as you have given me. Celebrate big, and know that I am always here for you! 🌹💞"
  },
  {
    id: 14,
    content:
      "To the love of my life, happy birthday! Your smile brightens my days, and your love completes me. May this birthday be filled with love, laughter, and all the joy your heart can hold. I am so lucky to have you! 🎂💗"
  },
  {
    id: 15,
    content:
      "Happy birthday, my gorgeous girlfriend! Your love is a beautiful melody that plays in my heart. May your day be filled with sweet moments, laughter, and love that never ends. I adore you, now and always! 🎉💖"
  },
  {
    id: 16,
    content:
      "To my amazing girlfriend, happy birthday! You bring light into my life and happiness to my heart. On this special day, I wish you all the love and joy you can imagine. Let's make unforgettable memories together! 🌟💘"
  },
  {
    id: 17,
    content:
      "Happy birthday to my beautiful girlfriend! You are the reason I wake up smiling every day. May your special day be filled with love, laughter, and all your favorite things. You deserve the world! 🎈❤️"
  },
  {
    id: 18,
    content:
      "To my sweet love, happy birthday! Your love is my greatest treasure. May this day be filled with beautiful moments, endless joy, and all the love you bring into my life. You are truly one of a kind! 🌸💝"
  },
  {
    id: 19,
    content:
      "Happy birthday, sweetheart! You have a heart full of kindness and a spirit that inspires me. May your birthday be as wonderful as you are, filled with laughter, love, and all your dreams coming true. I love you! 🎂💓"
  },
  {
    id: 20,
    content:
      "To my wonderful girlfriend, happy birthday! Your love is a beautiful journey that I cherish every day. May this year be filled with adventures, joy, and all the love your heart can hold. I can't wait to celebrate with you! 🎊💞"
  },
  {
    id: 21,
    content:
      "Happy birthday to the girl who makes my heart skip a beat! Your smile lights up my life, and your love fills me with joy. May this birthday be filled with all the happiness you bring to others. You are loved beyond measure! 🌼💖"
  },
  {
    id: 22,
    content:
      "To my amazing girlfriend, happy birthday! Your spirit is contagious, and your laughter brings me so much joy. May your special day be filled with love, laughter, and unforgettable memories. You deserve the best of everything! 🌟❤️"
  },
  {
    id: 23,
    content:
      "Happy birthday, my love! You are my dream come true, and I am so grateful for every moment spent with you. May your birthday be as beautiful and special as you are. Let's make it a day to remember! 🎁💗"
  },
  {
    id: 24,
    content:
      "To my sweetest girlfriend, happy birthday! Your love is my guiding light, and your happiness is my priority. May this day be filled with all the joy you bring into my life. You are truly amazing! 🎈💞"
  },
  {
    id: 25,
    content:
      "Happy birthday to my gorgeous girlfriend! Your beauty shines from within, and your love fills my heart. May this special day be filled with laughter, love, and cherished memories. I adore you! 🎉💖"
  },
  {
    id: 26,
    content:
      "To my love, happy birthday! Your happiness is my greatest gift. May your birthday be filled with everything you cherish and surrounded by those who love you. I am so grateful for you! 🌹❤️"
  },
  {
    id: 27,
    content:
      "Happy birthday, darling! Your love is my most cherished blessing. May your special day be filled with beautiful moments and all the joy your heart can hold. I love you more than words can say! 🌸💘"
  },
  {
    id: 28,
    content:
      "To my incredible girlfriend, happy birthday! Your laughter is the sweetest melody in my life. May this year be filled with happiness, adventure, and all the love you deserve. I can't wait to celebrate you! 🎂💞"
  },
  {
    id: 29,
    content:
      "Happy birthday to my amazing girlfriend! Your love inspires me every day, and I am so grateful to have you in my life. May your special day be filled with joy, love, and unforgettable memories. You are everything to me! 🎊❤️"
  },
  {
    id: 30,
    content:
      "To my beautiful girlfriend, happy birthday! You light up my life in ways I never knew possible. May this day bring you as much happiness as you give to others. You are loved more than you can imagine! 🌼💖"
  },
  {
    id: 31,
    content:
      "Happy birthday to the girl who makes every moment special! Your love fills my heart with joy and my life with happiness. May your birthday be as wonderful as you are, filled with love and laughter. I adore you! 🎉💓"
  },
  {
    id: 32,
    content:
      "To my sweet love, happy birthday! Your happiness is my mission, and your smile is my reward. May this special day be filled with love, joy, and all the things you hold dear. You are truly amazing! 🎈💗"
  },
  {
    id: 33,
    content:
      "Happy birthday, my gorgeous girlfriend! Your beauty radiates from within, and your kindness touches everyone around you. May your special day be filled with all the love and happiness you deserve. I love you! 🌹❤️"
  },
  {
    id: 34,
    content:
      "To my incredible girlfriend, happy birthday! Your love is my greatest joy, and your happiness is my goal. May this year bring you everything you've ever wanted and more. Let's make beautiful memories together! 🎁💞"
  },
  {
    id: 35,
    content:
      "Happy birthday to the girl who stole my heart! Your laughter is the sweetest sound, and your love is my greatest treasure. May this birthday be filled with all the joy you bring into my life. You are simply wonderful! 🌸💖"
  },
  {
    id: 36,
    content:
      "To my dearest girlfriend, happy birthday! Your presence in my life is a blessing I cherish every day. May your special day be filled with love, joy, and all your favorite things. I am so grateful for you! 🎈❤️"
  },
  {
    id: 37,
    content:
      "Happy birthday to my beautiful girlfriend! Your love is the light that guides me through life. May this day be filled with sweet moments and all the happiness your heart can hold. I love you more than words can express! 🌼💘"
  },
  {
    id: 38,
    content:
      "To my sweet love, happy birthday! Your joy is contagious, and your laughter brightens my days. May this special day be filled with love, laughter, and all your dreams coming true. You are my everything! 🎊💗"
  },
  {
    id: 39,
    content:
      "Happy birthday, darling! You are my soulmate and my best friend. May this year bring you all the happiness you deserve and more. Let's make every moment together special! 🎂❤️"
  },
  {
    id: 40,
    content:
      "To my amazing girlfriend, happy birthday! Your love is my guiding light, and your happiness is my greatest joy. May this day be filled with beautiful memories and all the love in the world. I am so lucky to have you! 🌹💖"
  },
  {
    id: 41,
    content:
      "Happy birthday to the love of my life! Your smile brightens my days and your laughter warms my heart. May your special day be filled with joy, love, and unforgettable moments. You deserve nothing but the best! 🎈💞"
  },
  {
    id: 42,
    content:
      "To my beautiful girlfriend, happy birthday! Your spirit is a treasure, and your love is my greatest gift. May this year be filled with happiness, adventure, and all your dreams coming true. I adore you! 🌸❤️"
  },
  {
    id: 43,
    content:
      "Happy birthday, my sweet love! You are my sunshine on cloudy days and my rock when I need support. May your special day be filled with love, laughter, and everything your heart desires. You mean the world to me! 🎉💖"
  },
  {
    id: 44,
    content:
      "To my wonderful girlfriend, happy birthday! Your love brings me joy and your smile warms my heart. May this day be as amazing as you are, filled with love, laughter, and all your favorite things. You are truly special! 🎁💘"
  },
  {
    id: 45,
    content:
      "Happy birthday to my gorgeous girlfriend! You fill my life with happiness and my heart with love. May your special day be filled with sweet surprises and all the joy your heart can hold. I love you endlessly! 🎂❤️"
  },
  {
    id: 46,
    content:
      "To my incredible girlfriend, happy birthday! Your laughter is the sweetest melody in my life. May this birthday be filled with beautiful moments, joy, and all the love you give to others. I am so grateful for you! 🌹💞"
  },
  {
    id: 47,
    content:
      "Happy birthday, my love! Your presence in my life is a treasure. May this special day be filled with all the happiness and joy you bring to my life. Let's celebrate you today and every day! 🎈💗"
  },
  {
    id: 48,
    content:
      "To my dearest girlfriend, happy birthday! Your love fills my heart with happiness. May your special day be filled with laughter, love, and everything you desire. I cherish you more than you can imagine! 🌸❤️"
  },
  {
    id: 49,
    content:
      "Happy birthday to my beautiful girlfriend! Your smile lights up my world and your love fills my heart. May this day be as special as you are, filled with joy and cherished moments. You deserve the best! 🎊💖"
  },
  {
    id: 50,
    content:
      "To my sweet love, happy birthday! Your happiness is my mission, and your joy is my greatest reward. May your special day be filled with love, laughter, and all the things that make you smile. I adore you endlessly! 🎂💞"
  },
  {
    id: 51,
    content:
      "Happy birthday to the girl who stole my heart! Your love is a beautiful melody that plays in my soul. May this day be filled with sweet surprises, laughter, and all the love your heart can hold. You are my everything! 🌹💖"
  },
  {
    id: 52,
    content:
      "To my incredible girlfriend, happy birthday! Your spirit is like a bright star, shining light into my life. May your special day be filled with joy, love, and all your dreams coming true. I am so lucky to have you! 🎉❤️"
  },
  {
    id: 53,
    content:
      "Happy birthday, my love! Your smile is the sunshine that brightens my days, and your laughter is the sweetest sound. May your birthday be filled with everything that brings you joy and happiness. You deserve it all! 🎈💘"
  },
  {
    id: 54,
    content:
      "To my beautiful girlfriend, happy birthday! You are my inspiration and my greatest joy. May this year be filled with adventures, love, and all the happiness your heart can hold. I adore you more than words can express! 🌸💗"
  },
  {
    id: 55,
    content:
      "Happy birthday to my amazing girlfriend! Your love is my greatest treasure, and your happiness is my top priority. May this special day be filled with beautiful moments and all the joy you bring into my life. I love you! 🎂💞"
  },
  {
    id: 56,
    content:
      "To my sweet love, happy birthday! Your presence fills my heart with warmth and joy. May your birthday be filled with laughter, love, and all the wonderful things you deserve. You are truly amazing! 🎊❤️"
  },
  {
    id: 57,
    content:
      "Happy birthday, darling! Your love is a blessing that I cherish every day. May this day be as special as you are, filled with love, joy, and all your favorite things. You mean the world to me! 🌼💖"
  },
  {
    id: 58,
    content:
      "To my wonderful girlfriend, happy birthday! Your spirit shines brightly, and your love fills my life with happiness. May this special day be filled with all the love and joy you bring into my life. I am so grateful for you! 🎁💘"
  },
  {
    id: 59,
    content:
      "Happy birthday to my gorgeous girlfriend! Your smile brightens my life, and your laughter fills my heart with joy. May your birthday be filled with sweet surprises and all the love you deserve. I adore you! 🎈💗"
  },
  {
    id: 60,
    content:
      "To my incredible love, happy birthday! Your happiness is my mission, and your joy is my greatest reward. May this special day be filled with love, laughter, and all the things that make you smile. You are my everything! 🌸💖"
  },
  {
    id: 61,
    content:
      "Happy birthday, my sweet girlfriend! Your love is the light that brightens my world. May your special day be filled with beautiful moments, laughter, and all the love your heart can hold. I love you dearly! 🎉❤️"
  },
  {
    id: 62,
    content:
      "To my beautiful girlfriend, happy birthday! Your love is a treasure I cherish every day. May your birthday be filled with joy, love, and all the sweet surprises you can imagine. You are so special to me! 🎂💘"
  },
  {
    id: 63,
    content:
      "Happy birthday to the love of my life! Your smile lights up my world and your laughter fills my heart with joy. May this special day be filled with all the love and happiness you deserve. You mean everything to me! 🎈💖"
  },
  {
    id: 64,
    content:
      "To my incredible girlfriend, happy birthday! Your spirit is like a ray of sunshine, brightening my life every day. May this year bring you joy, love, and all your dreams coming true. I adore you! 🌹❤️"
  },
  {
    id: 65,
    content:
      "Happy birthday, my love! Your presence in my life is a gift I cherish every day. May your birthday be filled with laughter, love, and everything that makes you smile. You are my greatest blessing! 🎊💞"
  },
  {
    id: 66,
    content:
      "To my sweet girlfriend, happy birthday! Your love is the most precious thing in my life. May this day be filled with joy, laughter, and all the things that bring you happiness. I am so grateful for you! 🎁❤️"
  },
  {
    id: 67,
    content:
      "Happy birthday to my amazing girlfriend! Your beauty and kindness shine brightly in this world. May your special day be filled with love, laughter, and all the wonderful things you deserve. You are truly incredible! 🎈💖"
  },
  {
    id: 68,
    content:
      "To my beautiful love, happy birthday! Your love is a sweet melody that plays in my heart. May this day be filled with beautiful moments, joy, and all the things that make you smile. You mean everything to me! 🌼💞"
  },
  {
    id: 69,
    content:
      "Happy birthday, my sweet girlfriend! Your laughter is the sweetest sound, and your love is the greatest treasure. May this birthday be filled with all the joy you bring into my life. I adore you endlessly! 🎉❤️"
  },
  {
    id: 70,
    content:
      "To my wonderful girlfriend, happy birthday! Your love is my guiding star, leading me to happiness. May your special day be filled with all the love, joy, and sweet surprises your heart can hold. I love you! 🎂💘"
  },
  {
    id: 71,
    content:
      "Happy birthday to my gorgeous girlfriend! Your smile brightens my life, and your love fills my heart with joy. May this special day be filled with laughter, love, and everything that makes you happy. You are my everything! 🎈💖"
  },
  {
    id: 72,
    content:
      "To my incredible love, happy birthday! Your happiness is my mission, and your joy is my greatest reward. May this day be as special as you are, filled with love and unforgettable moments. I cherish you dearly! 🌹💞"
  },
  {
    id: 73,
    content:
      "Happy birthday, my sweet girlfriend! Your love is a beautiful gift that I treasure every day. May your special day be filled with joy, laughter, and everything your heart desires. You are truly amazing! 🎊❤️"
  },
  {
    id: 74,
    content:
      "To my beautiful girlfriend, happy birthday! Your presence in my life is a blessing I cherish deeply. May this year bring you joy, love, and all the happiness you can imagine. I adore you more than words can express! 🎁💘"
  },
  {
    id: 75,
    content:
      "Happy birthday to my amazing girlfriend! Your love is a melody that fills my heart with happiness. May your special day be filled with sweet surprises, laughter, and all the joy your heart can hold. I love you! 🎈💖"
  },
  {
    id: 76,
    content:
      "To my sweet love, happy birthday! Your happiness is my greatest joy, and your love is a treasure I hold dear. May your birthday be filled with beautiful moments, laughter, and everything you wish for. You mean the world to me! 🌼❤️"
  },
  {
    id: 77,
    content:
      "Happy birthday, darling! Your love is a blessing that makes every day brighter. May this special day be filled with joy, love, and all your favorite things. You are my heart's desire! 🎊💘"
  },
  {
    id: 78,
    content:
      "To my wonderful girlfriend, happy birthday! Your spirit is a radiant light that brightens my world. May this year be filled with love, laughter, and all the happiness you bring into my life. I am so grateful for you! 🎁💖"
  },
  {
    id: 79,
    content:
      "Happy birthday to my beautiful girlfriend! Your smile is a ray of sunshine, and your love fills my heart with joy. May your special day be filled with laughter, love, and all the wonderful moments you deserve. You are simply amazing! 🎈💗"
  },
  {
    id: 80,
    content:
      "To my incredible love, happy birthday! Your happiness is my mission, and your joy is my greatest treasure. May this day be filled with sweet surprises, laughter, and everything your heart desires. I adore you endlessly! 🎂💞"
  },
  {
    id: 81,
    content:
      "Happy birthday, my sweet girlfriend! Your love is the sweetest melody in my life. May this special day be filled with all the love, joy, and beautiful moments you deserve. You are my everything! 🎉❤️"
  },
  {
    id: 82,
    content:
      "To my beautiful girlfriend, happy birthday! Your love is a treasure I cherish every day. May your birthday be filled with joy, laughter, and everything that brings you happiness. I love you dearly! 🎁💖"
  },
  {
    id: 83,
    content:
      "Happy birthday to the love of my life! Your smile lights up my world, and your laughter fills my heart with joy. May this special day be filled with love, happiness, and all your dreams coming true. You mean everything to me! 🎈💘"
  },
  {
    id: 84,
    content:
      "To my incredible girlfriend, happy birthday! Your spirit is a bright star that guides me through life. May this year bring you joy, love, and all your wishes fulfilled. I cherish you more than words can express! 🌹💞"
  },
  {
    id: 85,
    content:
      "Happy birthday, my love! Your presence in my life is a gift I cherish every day. May your special day be filled with laughter, love, and everything your heart desires. You are my greatest blessing! 🎊❤️"
  },
  {
    id: 86,
    content:
      "To my sweet girlfriend, happy birthday! Your love is the light that brightens my life. May your birthday be filled with beautiful moments, joy, and all the things that make you smile. I adore you dearly! 🎂💘"
  },
  {
    id: 87,
    content:
      "Happy birthday to my amazing girlfriend! Your beauty and kindness shine brightly in this world. May your special day be filled with love, laughter, and all the wonderful things you deserve. You are truly incredible! 🎈💖"
  },
  {
    id: 88,
    content:
      "To my beautiful love, happy birthday! Your love is a sweet melody that plays in my heart. May this day be filled with beautiful moments, joy, and all the things that make you smile. You mean everything to me! 🌼💞"
  },
  {
    id: 89,
    content:
      "Happy birthday, my sweet girlfriend! Your laughter is the sweetest sound, and your love is the greatest treasure. May this birthday be filled with all the joy you bring into my life. I adore you endlessly! 🎉❤️"
  },
  {
    id: 90,
    content:
      "To my wonderful girlfriend, happy birthday! Your love is my guiding star, leading me to happiness. May your special day be filled with all the love, joy, and sweet surprises your heart can hold. I love you! 🎂💘"
  },
  {
    id: 91,
    content:
      "Happy birthday to my gorgeous girlfriend! Your smile brightens my life, and your love fills my heart with joy. May this special day be filled with laughter, love, and everything that makes you happy. You are my everything! 🎈💖"
  },
  {
    id: 92,
    content:
      "To my incredible love, happy birthday! Your happiness is my mission, and your joy is my greatest reward. May this day be as special as you are, filled with love and unforgettable moments. I cherish you dearly! 🌹💞"
  },
  {
    id: 93,
    content:
      "Happy birthday, my sweet girlfriend! Your love is a beautiful gift that I treasure every day. May your special day be filled with joy, laughter, and everything your heart desires. You are truly amazing! 🎊❤️"
  },
  {
    id: 94,
    content:
      "To my beautiful girlfriend, happy birthday! Your presence in my life is a blessing I cherish deeply. May this year bring you joy, love, and all the happiness you can imagine. I adore you more than words can express! 🎁💘"
  },
  {
    id: 95,
    content:
      "Happy birthday to my amazing girlfriend! Your love is a melody that fills my heart with happiness. May your special day be filled with sweet surprises, laughter, and all the joy your heart can hold. I love you! 🎈💖"
  },
  {
    id: 96,
    content:
      "To my sweet love, happy birthday! Your happiness is my greatest joy, and your love is a treasure I hold dear. May your birthday be filled with beautiful moments, laughter, and everything you wish for. You mean the world to me! 🌼❤️"
  },
  {
    id: 97,
    content:
      "Happy birthday, darling! Your love is a blessing that makes every day brighter. May this special day be filled with joy, love, and all your favorite things. You are my heart's desire! 🎊💘"
  },
  {
    id: 98,
    content:
      "To my wonderful girlfriend, happy birthday! Your spirit is a radiant light that brightens my world. May this year be filled with love, laughter, and all the happiness you bring into my life. I am so grateful for you! 🎁💖"
  },
  {
    id: 99,
    content:
      "Happy birthday to my beautiful girlfriend! Your smile is a ray of sunshine, and your love fills my heart with joy. May your special day be filled with laughter, love, and all the wonderful moments you deserve. You are simply amazing! 🎈💗"
  },
  {
    id: 100,
    content:
      "To my incredible love, happy birthday! Your happiness is my mission, and your joy is my greatest treasure. May this day be filled with sweet surprises, laughter, and everything your heart desires. I adore you endlessly! 🎂💞"
  }
];

const husband = [
  {
    id: 1,
    content:
      "Happy birthday to my wonderful husband! Your love is my anchor, guiding me through life's storms. On this special day, I want you to know how much you mean to me. May this year be filled with love, laughter, and all your dreams coming true. I cherish every moment with you! 🎉❤️"
  },
  {
    id: 2,
    content:
      "To my amazing husband, happy birthday! You are my rock and my best friend. Your strength and kindness inspire me every day. May your birthday be filled with joy, adventure, and all the things you love. I am so grateful for you! 🎂💖"
  },
  {
    id: 3,
    content:
      "Happy birthday, my love! Every day with you is a blessing, and I cherish the memories we create together. May your special day be filled with laughter, love, and all the joy you bring into my life. You deserve the world! 🎈💞"
  },
  {
    id: 4,
    content:
      "To my beloved husband, happy birthday! Your love is a precious gift that I treasure every day. May this year bring you endless happiness, success, and all the adventures your heart desires. I love you more than words can express! 🌹💘"
  },
  {
    id: 5,
    content:
      "Happy birthday to my incredible husband! You fill my life with joy and my heart with love. May this special day be a reflection of the wonderful person you are, surrounded by happiness and laughter. I am so lucky to have you! 🎊❤️"
  },
  {
    id: 6,
    content:
      "To my dear husband, happy birthday! You are my partner in every adventure, and I am grateful for your love and support. May your birthday be filled with sweet moments, cherished memories, and all the things that bring you joy. I adore you! 🎁💖"
  },
  {
    id: 7,
    content:
      "Happy birthday, my soulmate! Your love is my greatest treasure, and I am so thankful to share this life with you. May your special day be filled with everything you desire and all the love your heart can hold. You are my everything! 🎉💞"
  },
  {
    id: 8,
    content:
      "To my loving husband, happy birthday! Your smile lights up my life, and your love makes every day brighter. May this year bring you success, happiness, and all your dreams coming true. I cherish you today and always! 🎂❤️"
  },
  {
    id: 9,
    content:
      "Happy birthday to the man I love! Your kindness and strength inspire me every day. May your special day be filled with laughter, love, and all the adventures you dream of. You are my forever! 🎈💖"
  },
  {
    id: 10,
    content:
      "To my amazing husband, happy birthday! Your love is a blessing that enriches my life. May this year bring you joy, fulfillment, and all the wonderful moments you deserve. I am so proud to be your partner! 🌹💘"
  },
  {
    id: 11,
    content:
      "Happy birthday, my dear husband! You are my rock and my confidant. May your special day be filled with happiness, laughter, and all the love you give to others. You are my heart's desire! 🎊❤️"
  },
  {
    id: 12,
    content:
      "To my incredible husband, happy birthday! Your love is a guiding light in my life. May this year be filled with exciting adventures, joy, and all the things that make you smile. I love you to the moon and back! 🎁💖"
  },
  {
    id: 13,
    content:
      "Happy birthday to my wonderful husband! Your support and love mean the world to me. May your special day be filled with joy, laughter, and everything your heart desires. I am so grateful for you! 🎉💞"
  },
  {
    id: 14,
    content:
      "To my beloved husband, happy birthday! Your love is a gift I cherish every day. May this year bring you endless happiness, health, and all the dreams you hold dear. I adore you beyond words! 🎈❤️"
  },
  {
    id: 15,
    content:
      "Happy birthday, my love! You make my life complete, and I am so thankful for every moment we share. May your special day be filled with love, laughter, and all your heart's desires. You are my everything! 🎂💖"
  },
  {
    id: 16,
    content:
      "To my amazing husband, happy birthday! Your love is the foundation of my happiness. May this year bring you joy, adventure, and all the wonderful things you deserve. I cherish you deeply! 🌹💞"
  },
  {
    id: 17,
    content:
      "Happy birthday to my incredible husband! Your smile is my favorite sight, and your happiness is my greatest joy. May your special day be filled with love, laughter, and all your dreams coming true. You mean the world to me! 🎊❤️"
  },
  {
    id: 18,
    content:
      "To my dear husband, happy birthday! Your love is my sanctuary, and I am so grateful to share this life with you. May this year bring you success, happiness, and all the adventures you desire. I adore you! 🎁💖"
  },
  {
    id: 19,
    content:
      "Happy birthday, my soulmate! Your presence in my life is a blessing I treasure every day. May your special day be filled with joy, laughter, and everything your heart desires. You are my forever love! 🎉💞"
  },
  {
    id: 20,
    content:
      "To my loving husband, happy birthday! You are my partner in every adventure, and I am thankful for your love and support. May your birthday be filled with sweet moments and cherished memories. I cherish you today and always! 🎈❤️"
  },
  {
    id: 21,
    content:
      "Happy birthday to the man I love! Your kindness and strength inspire me every day. May your special day be filled with laughter, love, and all the adventures you dream of. You are my everything! 🎂💖"
  },
  {
    id: 22,
    content:
      "To my amazing husband, happy birthday! Your love is a blessing that enriches my life. May this year bring you joy, fulfillment, and all the wonderful moments you deserve. I am so proud to be your partner! 🌹💘"
  },
  {
    id: 23,
    content:
      "Happy birthday, my dear husband! You are my rock and my confidant. May your special day be filled with happiness, laughter, and all the love you give to others. You are my heart's desire! 🎊❤️"
  },
  {
    id: 24,
    content:
      "To my incredible husband, happy birthday! Your love is a guiding light in my life. May this year be filled with exciting adventures, joy, and all the things that make you smile. I love you to the moon and back! 🎁💖"
  },
  {
    id: 25,
    content:
      "Happy birthday to my wonderful husband! Your support and love mean the world to me. May your special day be filled with joy, laughter, and everything your heart desires. I am so grateful for you! 🎉💞"
  },
  {
    id: 26,
    content:
      "To my beloved husband, happy birthday! Your love is a gift I cherish every day. May this year bring you endless happiness, health, and all the dreams you hold dear. I adore you beyond words! 🎈❤️"
  },
  {
    id: 27,
    content:
      "Happy birthday, my love! You make my life complete, and I am so thankful for every moment we share. May your special day be filled with love, laughter, and all your heart's desires. You are my everything! 🎂💖"
  },
  {
    id: 28,
    content:
      "To my amazing husband, happy birthday! Your love is the foundation of my happiness. May this year bring you joy, adventure, and all the wonderful things you deserve. I cherish you deeply! 🌹💞"
  },
  {
    id: 29,
    content:
      "Happy birthday to my incredible husband! Your smile is my favorite sight, and your happiness is my greatest joy. May your special day be filled with love, laughter, and all your dreams coming true. You mean the world to me! 🎊❤️"
  },
  {
    id: 30,
    content:
      "To my dear husband, happy birthday! Your love is my sanctuary, and I am so grateful to share this life with you. May this year bring you success, happiness, and all the adventures you desire. I adore you! 🎁💖"
  },
  {
    id: 31,
    content:
      "Happy birthday, my soulmate! Your presence in my life is a blessing I treasure every day. May your special day be filled with joy, laughter, and everything your heart desires. You are my forever love! 🎉💞"
  },
  {
    id: 32,
    content:
      "To my loving husband, happy birthday! You are my partner in every adventure, and I am thankful for your love and support. May your birthday be filled with sweet moments and cherished memories. I cherish you today and always! 🎈❤️"
  },
  {
    id: 33,
    content:
      "Happy birthday to the man I love! Your kindness and strength inspire me every day. May your special day be filled with laughter, love, and all the adventures you dream of. You are my everything! 🎂💖"
  },
  {
    id: 34,
    content:
      "To my amazing husband, happy birthday! Your love is a blessing that enriches my life. May this year bring you joy, fulfillment, and all the wonderful moments you deserve. I am so proud to be your partner! 🌹💘"
  },
  {
    id: 35,
    content:
      "Happy birthday, my dear husband! You are my rock and my confidant. May your special day be filled with happiness, laughter, and all the love you give to others. You are my heart's desire! 🎊❤️"
  },
  {
    id: 36,
    content:
      "To my incredible husband, happy birthday! Your love is a guiding light in my life. May this year be filled with exciting adventures, joy, and all the things that make you smile. I love you to the moon and back! 🎁💖"
  },
  {
    id: 37,
    content:
      "Happy birthday to my wonderful husband! Your support and love mean the world to me. May your special day be filled with joy, laughter, and everything your heart desires. I am so grateful for you! 🎉💞"
  },
  {
    id: 38,
    content:
      "To my beloved husband, happy birthday! Your love is a gift I cherish every day. May this year bring you endless happiness, health, and all the dreams you hold dear. I adore you beyond words! 🎈❤️"
  },
  {
    id: 39,
    content:
      "Happy birthday, my love! You make my life complete, and I am so thankful for every moment we share. May your special day be filled with love, laughter, and all your heart's desires. You are my everything! 🎂💖"
  },
  {
    id: 40,
    content:
      "To my amazing husband, happy birthday! Your love is the foundation of my happiness. May this year bring you joy, adventure, and all the wonderful things you deserve. I cherish you deeply! 🌹💞"
  },
  {
    id: 41,
    content:
      "Happy birthday to my incredible husband! Your smile is my favorite sight, and your happiness is my greatest joy. May your special day be filled with love, laughter, and all your dreams coming true. You mean the world to me! 🎊❤️"
  },
  {
    id: 42,
    content:
      "To my dear husband, happy birthday! Your love is my sanctuary, and I am so grateful to share this life with you. May this year bring you success, happiness, and all the adventures you desire. I adore you! 🎁💖"
  },
  {
    id: 43,
    content:
      "Happy birthday, my soulmate! Your presence in my life is a blessing I treasure every day. May your special day be filled with joy, laughter, and everything your heart desires. You are my forever love! 🎉💞"
  },
  {
    id: 44,
    content:
      "To my loving husband, happy birthday! You are my partner in every adventure, and I am thankful for your love and support. May your birthday be filled with sweet moments and cherished memories. I cherish you today and always! 🎈❤️"
  },
  {
    id: 45,
    content:
      "Happy birthday to the man I love! Your kindness and strength inspire me every day. May your special day be filled with laughter, love, and all the adventures you dream of. You are my everything! 🎂💖"
  },
  {
    id: 46,
    content:
      "To my amazing husband, happy birthday! Your love is a blessing that enriches my life. May this year bring you joy, fulfillment, and all the wonderful moments you deserve. I am so proud to be your partner! 🌹💘"
  },
  {
    id: 47,
    content:
      "Happy birthday, my dear husband! You are my rock and my confidant. May your special day be filled with happiness, laughter, and all the love you give to others. You are my heart's desire! 🎊❤️"
  },
  {
    id: 48,
    content:
      "To my incredible husband, happy birthday! Your love is a guiding light in my life. May this year be filled with exciting adventures, joy, and all the things that make you smile. I love you to the moon and back! 🎁💖"
  },
  {
    id: 49,
    content:
      "Happy birthday to my wonderful husband! Your support and love mean the world to me. May your special day be filled with joy, laughter, and everything your heart desires. I am so grateful for you! 🎉💞"
  },
  {
    id: 50,
    content:
      "To my beloved husband, happy birthday! Your love is a gift I cherish every day. May this year bring you endless happiness, health, and all the dreams you hold dear. I adore you beyond words! 🎈❤️"
  },

  {
    id: 51,
    content:
      "Happy birthday, my love! Every moment spent with you is a treasure, and I am so grateful for your presence in my life. May this special day bring you as much joy as you bring to my heart. You are my greatest adventure! 🎂💖"
  },
  {
    id: 52,
    content:
      "To my amazing husband, happy birthday! Your love is my strength, and your happiness is my priority. May your day be filled with love, laughter, and all the things that make you smile. You are the best part of my life! 🌹💞"
  },
  {
    id: 53,
    content:
      "Happy birthday to the love of my life! Your heart is so kind, and your spirit is so bright. I hope this year brings you everything you’ve dreamed of and more. I’m proud to be your wife! 🎊❤️"
  },
  {
    id: 54,
    content:
      "To my beloved husband, happy birthday! You deserve all the happiness in the world today and every day. May your life be filled with love, laughter, and countless beautiful moments. I love you beyond measure! 🎈💖"
  },
  {
    id: 55,
    content:
      "Happy birthday, my dear husband! Your love has transformed my life in ways I never thought possible. On this special day, I celebrate you and all the joy you bring into my world. You are my heart! 🎉💞"
  },
  {
    id: 56,
    content:
      "To my incredible husband, happy birthday! Each day with you is a beautiful gift, and I am so thankful for every moment. May this year be filled with adventure, happiness, and all your heart desires. You are my everything! 🎂❤️"
  },
  {
    id: 57,
    content:
      "Happy birthday to my wonderful husband! Your love fills my life with joy and my heart with peace. May your special day be as amazing as you are, surrounded by love and happiness. You are my forever! 🌹💘"
  },
  {
    id: 58,
    content:
      "To my loving husband, happy birthday! Your presence in my life is a treasure I cherish every day. May this year be filled with laughter, success, and all the beautiful moments you deserve. I adore you! 🎁💖"
  },
  {
    id: 59,
    content:
      "Happy birthday, my soulmate! Your love is a source of strength and joy in my life. May your special day be filled with all the things you love, and may this year bring you closer to your dreams. You mean everything to me! 🎉💞"
  },
  {
    id: 60,
    content:
      "To my amazing husband, happy birthday! Your love is a beautiful melody that plays in my heart. May your day be filled with sweet surprises, love, and laughter. I am so blessed to have you! 🎈❤️"
  },
  {
    id: 61,
    content:
      "Happy birthday to the man I adore! Your kindness, strength, and love inspire me every day. May this year bring you immense happiness, and may we create countless beautiful memories together. You are my heart's delight! 🎂💖"
  },
  {
    id: 62,
    content:
      "To my beloved husband, happy birthday! Your love is my greatest gift, and I am forever grateful for you. May your special day be filled with joy, laughter, and everything your heart desires. You are my everything! 🌹💞"
  },
  {
    id: 63,
    content:
      "Happy birthday, my love! You light up my life in ways I can't express. May your day be as wonderful as you are, filled with all the things that bring you happiness. I cherish you more than words can say! 🎉❤️"
  },
  {
    id: 64,
    content:
      "To my incredible husband, happy birthday! Your love is my anchor, and your happiness is my goal. May this year be filled with amazing adventures and all the love your heart can hold. You are my forever! 🎈💖"
  },
  {
    id: 65,
    content:
      "Happy birthday to my wonderful husband! Your presence in my life is a blessing that I cherish every day. May this year bring you success, joy, and everything you dream of. I love you endlessly! 🎂💞"
  },
  {
    id: 66,
    content:
      "To my loving husband, happy birthday! Your heart is so kind, and your love fills my life with happiness. May this special day be filled with laughter, love, and all your favorite things. You are my dream come true! 🌹❤️"
  },
  {
    id: 67,
    content:
      "Happy birthday, my soulmate! Every moment spent with you is a treasure, and I am so thankful for your love. May your special day be filled with joy and all the things you cherish most. You are my everything! 🎉💖"
  },
  {
    id: 68,
    content:
      "To my amazing husband, happy birthday! Your love is my strength and my joy. May this year bring you as much happiness as you bring into my life. I adore you more than words can express! 🎈💞"
  },
  {
    id: 69,
    content:
      "Happy birthday to the love of my life! Your kindness and laughter brighten my days. May your birthday be filled with love, joy, and all the adventures your heart desires. You are my greatest treasure! 🎂❤️"
  },
  {
    id: 70,
    content:
      "To my beloved husband, happy birthday! Your love is a gift that I cherish every day. May this year bring you endless happiness, health, and all your dreams coming true. I love you dearly! 🌹💖"
  },
  {
    id: 71,
    content:
      "Happy birthday, my dear husband! Your smile is my sunshine, and your happiness is my greatest joy. May your special day be filled with laughter, love, and everything your heart desires. You are my world! 🎉💞"
  },
  {
    id: 72,
    content:
      "To my incredible husband, happy birthday! Your love is a beacon of light in my life. May this year be filled with exciting adventures, joy, and all the things that make you smile. I adore you! 🎈❤️"
  },
  {
    id: 73,
    content:
      "Happy birthday to my wonderful husband! Your support and love mean everything to me. May your special day be filled with joy, laughter, and everything your heart wishes for. I am so grateful for you! 🎂💖"
  },
  {
    id: 74,
    content:
      "To my beloved husband, happy birthday! Your love is a precious gift that I treasure every day. May this year bring you endless happiness, health, and all the dreams you hold dear. You are my everything! 🌹💞"
  },
  {
    id: 75,
    content:
      "Happy birthday, my love! Every moment with you is a blessing, and I cherish our time together. May your special day be filled with love, laughter, and all the adventures you desire. You are my heart! 🎉❤️"
  },
  {
    id: 76,
    content:
      "To my amazing husband, happy birthday! Your love is my safe haven, and I am so thankful for every moment we share. May this year be filled with joy, adventure, and everything that brings you happiness. You mean the world to me! 🎈💖"
  },
  {
    id: 77,
    content:
      "Happy birthday to the man I adore! Your strength and kindness inspire me every day. May your birthday be filled with love, laughter, and all the things that make you smile. You are my everything! 🎂💞"
  },
  {
    id: 78,
    content:
      "To my beloved husband, happy birthday! Your love is a treasure I cherish every day. May this year bring you endless joy, health, and all the dreams you hold dear. I love you beyond measure! 🌹❤️"
  },
  {
    id: 79,
    content:
      "Happy birthday, my dear husband! You are my rock and my confidant. May your special day be filled with happiness, laughter, and all the love you give to others. You are my heart's desire! 🎉💖"
  },
  {
    id: 80,
    content:
      "To my incredible husband, happy birthday! Your love is a guiding light in my life. May this year be filled with exciting adventures, joy, and all the things that make you smile. I love you to the moon and back! 🎁💞"
  },
  {
    id: 81,
    content:
      "Happy birthday to my wonderful husband! Your support and love mean the world to me. May your special day be filled with joy, laughter, and everything your heart desires. I am so grateful for you! 🎉❤️"
  },
  {
    id: 82,
    content:
      "To my beloved husband, happy birthday! Your love is a gift I cherish every day. May this year bring you endless happiness, health, and all the dreams you hold dear. I adore you beyond words! 🎈💖"
  },
  {
    id: 83,
    content:
      "Happy birthday, my love! You make my life complete, and I am so thankful for every moment we share. May your special day be filled with love, laughter, and all your heart's desires. You are my everything! 🎂💞"
  },
  {
    id: 84,
    content:
      "To my amazing husband, happy birthday! Your love is the foundation of my happiness. May this year bring you joy, adventure, and all the wonderful things you deserve. I cherish you deeply! 🌹❤️"
  },
  {
    id: 85,
    content:
      "Happy birthday to my incredible husband! Your smile is my favorite sight, and your happiness is my greatest joy. May your special day be filled with love, laughter, and all your dreams coming true. You mean the world to me! 🎊💖"
  },
  {
    id: 86,
    content:
      "To my dear husband, happy birthday! Your love is my sanctuary, and I am so grateful to share this life with you. May this year bring you success, happiness, and all the adventures you desire. I adore you! 🎁💞"
  },
  {
    id: 87,
    content:
      "Happy birthday, my soulmate! Your presence in my life is a blessing I treasure every day. May your special day be filled with joy, laughter, and everything your heart desires. You are my forever love! 🎉❤️"
  },
  {
    id: 88,
    content:
      "To my loving husband, happy birthday! You are my partner in every adventure, and I am thankful for your love and support. May your birthday be filled with sweet moments and cherished memories. I cherish you today and always! 🎈💖"
  },
  {
    id: 89,
    content:
      "Happy birthday to the man I love! Your kindness and strength inspire me every day. May your special day be filled with laughter, love, and all the adventures you dream of. You are my everything! 🎂💞"
  },
  {
    id: 90,
    content:
      "To my amazing husband, happy birthday! Your love is a blessing that enriches my life. May this year bring you joy, fulfillment, and all the wonderful moments you deserve. I am so proud to be your partner! 🌹❤️"
  },
  {
    id: 91,
    content:
      "Happy birthday, my dear husband! You are my rock and my confidant. May your special day be filled with happiness, laughter, and all the love you give to others. You are my heart's desire! 🎊💖"
  },
  {
    id: 92,
    content:
      "To my incredible husband, happy birthday! Your love is a guiding light in my life. May this year be filled with exciting adventures, joy, and all the things that make you smile. I love you to the moon and back! 🎁💞"
  },
  {
    id: 93,
    content:
      "Happy birthday to my wonderful husband! Your support and love mean the world to me. May your special day be filled with joy, laughter, and everything your heart desires. I am so grateful for you! 🎉❤️"
  },
  {
    id: 94,
    content:
      "To my beloved husband, happy birthday! Your love is a gift I cherish every day. May this year bring you endless happiness, health, and all the dreams you hold dear. I adore you beyond words! 🎈💖"
  },
  {
    id: 95,
    content:
      "Happy birthday, my love! You make my life complete, and I am so thankful for every moment we share. May your special day be filled with love, laughter, and all your heart's desires. You are my everything! 🎂💞"
  },
  {
    id: 96,
    content:
      "To my amazing husband, happy birthday! Your love is the foundation of my happiness. May this year bring you joy, adventure, and all the wonderful things you deserve. I cherish you deeply! 🌹❤️"
  },
  {
    id: 97,
    content:
      "Happy birthday to my incredible husband! Your smile is my favorite sight, and your happiness is my greatest joy. May your special day be filled with love, laughter, and all your dreams coming true. You mean the world to me! 🎊💖"
  },
  {
    id: 98,
    content:
      "To my dear husband, happy birthday! Your love is my sanctuary, and I am so grateful to share this life with you. May this year bring you success, happiness, and all the adventures you desire. I adore you! 🎁💞"
  },
  {
    id: 99,
    content:
      "Happy birthday, my soulmate! Your presence in my life is a blessing I treasure every day. May your special day be filled with joy, laughter, and everything your heart desires. You are my forever love! 🎉❤️"
  },
  {
    id: 100,
    content:
      "To my loving husband, happy birthday! You are my partner in every adventure, and I am thankful for your love and support. May your birthday be filled with sweet moments and cherished memories. I cherish you today and always! 🎈💖"
  }
];

const father = [
  {
    id: 1,
    content:
      "Happy birthday to the best dad in the world! Your love and guidance have shaped me into who I am today. May your day be filled with joy, laughter, and all the things you love most. You deserve every bit of happiness! 🎂❤️"
  },
  {
    id: 2,
    content:
      "To my incredible father, happy birthday! Your strength and wisdom inspire me every day. I hope this year brings you all the joy you bring into my life. Thank you for being my rock! 🎉💖"
  },
  {
    id: 3,
    content:
      "Happy birthday, Dad! You are my hero, my mentor, and my friend. May your special day be filled with love, laughter, and all your favorite things. I am so grateful for you! 🌟💞"
  },
  {
    id: 4,
    content:
      "To my amazing father, happy birthday! Your love has been a guiding light in my life. I hope this year brings you as much happiness as you have given me. You are truly one of a kind! 🎈❤️"
  },
  {
    id: 5,
    content:
      "Happy birthday to the man who means the world to me! Your support and encouragement have helped me through so much. May your day be filled with all the love you give to others. You are my inspiration! 🎊💖"
  },
  {
    id: 6,
    content:
      "To my beloved dad, happy birthday! You have a heart of gold, and I am so thankful for everything you do. May this year be filled with joy, laughter, and all your dreams coming true. You are my hero! 🎂💞"
  },
  {
    id: 7,
    content:
      "Happy birthday, Dad! Your love is a gift I cherish every day. May your special day be filled with happiness, good health, and all the things you enjoy most. I love you more than words can express! 🎉❤️"
  },
  {
    id: 8,
    content:
      "To my wonderful father, happy birthday! Your wisdom and kindness have guided me through life. May this year bring you as much joy as you have given to our family. You are a true blessing! 🌹💖"
  },
  {
    id: 9,
    content:
      "Happy birthday to my amazing dad! Your strength and love inspire me every day. I hope your day is filled with laughter, good food, and all the things you enjoy. You are the best! 🎈💞"
  },
  {
    id: 10,
    content:
      "To my dear father, happy birthday! Your love has been a constant source of comfort and strength. May this year bring you endless joy and all the happiness you deserve. I am proud to be your child! 🎊❤️"
  },
  {
    id: 11,
    content:
      "Happy birthday, Dad! You are my role model, and I am grateful for your support and guidance. May your special day be filled with love, laughter, and all the things that bring you joy. You mean everything to me! 🎂💖"
  },
  {
    id: 12,
    content:
      "To my incredible father, happy birthday! Your love and wisdom have shaped my life in countless ways. May this year bring you all the happiness and health you deserve. You are a true blessing! 🎉💞"
  },
  {
    id: 13,
    content:
      "Happy birthday to the best dad ever! Your kindness and strength are qualities I admire every day. May your special day be filled with love, laughter, and all your favorite things. You are loved beyond measure! 🌟❤️"
  },
  {
    id: 14,
    content:
      "To my beloved dad, happy birthday! Your support has been my anchor in life's storms. May this year bring you joy, good health, and all the adventures you dream of. You are my hero! 🎈💖"
  },
  {
    id: 15,
    content:
      "Happy birthday, Dad! You have a heart of gold and a spirit that inspires everyone around you. May your special day be filled with joy, laughter, and all the things you love most. You are my rock! 🎊💞"
  },
  {
    id: 16,
    content:
      "To my amazing father, happy birthday! Your love is a guiding light in my life. I hope this year brings you as much joy as you have given to our family. You are truly one of a kind! 🎂❤️"
  },
  {
    id: 17,
    content:
      "Happy birthday to my wonderful dad! Your wisdom and kindness have guided me through life. May this year bring you as much joy as you have given to our family. You are a true blessing! 🎉💖"
  },
  {
    id: 18,
    content:
      "To my incredible father, happy birthday! Your love and support mean everything to me. May your day be filled with laughter, good food, and all the things that make you smile. You are my hero! 🎈💞"
  },
  {
    id: 19,
    content:
      "Happy birthday, Dad! You are my role model, and I am grateful for your support and guidance. May your special day be filled with love, laughter, and all the things that bring you joy. You mean everything to me! 🎊❤️"
  },
  {
    id: 20,
    content:
      "To my beloved dad, happy birthday! Your strength and love inspire me every day. May this year bring you as much happiness as you have given me. I adore you! 🎂💖"
  },
  {
    id: 21,
    content:
      "Happy birthday to the best dad in the world! Your love and guidance have shaped me into who I am today. May your day be filled with joy, laughter, and all the things you love most. You deserve every bit of happiness! 🎉💞"
  },
  {
    id: 22,
    content:
      "To my incredible father, happy birthday! Your strength and wisdom inspire me every day. I hope this year brings you all the joy you bring into my life. Thank you for being my rock! 🎈❤️"
  },
  {
    id: 23,
    content:
      "Happy birthday, Dad! You are my hero, my mentor, and my friend. May your special day be filled with love, laughter, and all your favorite things. I am so grateful for you! 🌟💖"
  },
  {
    id: 24,
    content:
      "To my amazing father, happy birthday! Your love has been a guiding light in my life. I hope this year brings you as much happiness as you have given me. You are truly one of a kind! 🎂💞"
  },
  {
    id: 25,
    content:
      "Happy birthday to the man who means the world to me! Your support and encouragement have helped me through so much. May your day be filled with all the love you give to others. You are my inspiration! 🎊❤️"
  },
  {
    id: 26,
    content:
      "To my beloved dad, happy birthday! You have a heart of gold, and I am so thankful for everything you do. May this year be filled with joy, laughter, and all your dreams coming true. You are my hero! 🎈💖"
  },
  {
    id: 27,
    content:
      "Happy birthday, Dad! Your love is a gift I cherish every day. May your special day be filled with happiness, good health, and all the things you enjoy most. I love you more than words can express! 🎂💞"
  },
  {
    id: 28,
    content:
      "To my wonderful father, happy birthday! Your wisdom and kindness have guided me through life. May this year bring you as much joy as you have given to our family. You are a true blessing! 🌹💖"
  },
  {
    id: 29,
    content:
      "Happy birthday to my amazing dad! Your strength and love inspire me every day. I hope your day is filled with laughter, good food, and all the things you enjoy. You are the best! 🎈❤️"
  },
  {
    id: 30,
    content:
      "To my dear father, happy birthday! Your love has been a constant source of comfort and strength. May this year bring you endless joy and all the happiness you deserve. I am proud to be your child! 🎊💖"
  },
  {
    id: 31,
    content:
      "Happy birthday, Dad! You are my role model, and I am grateful for your support and guidance. May your special day be filled with love, laughter, and all the things that bring you joy. You mean everything to me! 🎂💞"
  },
  {
    id: 32,
    content:
      "To my incredible father, happy birthday! Your love and wisdom have shaped my life in countless ways. May this year bring you all the happiness and health you deserve. You are a true blessing! 🎉💖"
  },
  {
    id: 33,
    content:
      "Happy birthday to the best dad ever! Your kindness and strength are qualities I admire every day. May your special day be filled with love, laughter, and all your favorite things. You are loved beyond measure! 🌟❤️"
  },
  {
    id: 34,
    content:
      "To my beloved dad, happy birthday! Your support has been my anchor in life's storms. May this year bring you joy, good health, and all the adventures you dream of. You are my hero! 🎈💖"
  },
  {
    id: 35,
    content:
      "Happy birthday, Dad! You have a heart of gold and a spirit that inspires everyone around you. May your special day be filled with joy, laughter, and all the things you love most. You are my rock! 🎊💞"
  },
  {
    id: 36,
    content:
      "To my amazing father, happy birthday! Your love is a guiding light in my life. I hope this year brings you as much joy as you have given to our family. You are truly one of a kind! 🎂❤️"
  },
  {
    id: 37,
    content:
      "Happy birthday to my wonderful dad! Your wisdom and kindness have guided me through life. May this year bring you as much joy as you have given to our family. You are a true blessing! 🎉💖"
  },
  {
    id: 38,
    content:
      "To my incredible father, happy birthday! Your love and support mean everything to me. May your day be filled with laughter, good food, and all the things that make you smile. You are my hero! 🎈💞"
  },
  {
    id: 39,
    content:
      "Happy birthday, Dad! You are my role model, and I am grateful for your support and guidance. May your special day be filled with love, laughter, and all the things that bring you joy. You mean everything to me! 🎊❤️"
  },
  {
    id: 40,
    content:
      "To my beloved dad, happy birthday! Your strength and love inspire me every day. May this year bring you as much happiness as you have given me. I adore you! 🎂💖"
  },
  {
    id: 41,
    content:
      "Happy birthday to the best dad in the world! Your love and guidance have shaped me into who I am today. May your day be filled with joy, laughter, and all the things you love most. You deserve every bit of happiness! 🎉💞"
  },
  {
    id: 42,
    content:
      "To my incredible father, happy birthday! Your strength and wisdom inspire me every day. I hope this year brings you all the joy you bring into my life. Thank you for being my rock! 🎈❤️"
  },
  {
    id: 43,
    content:
      "Happy birthday, Dad! You are my hero, my mentor, and my friend. May your special day be filled with love, laughter, and all your favorite things. I am so grateful for you! 🌟💖"
  },
  {
    id: 44,
    content:
      "To my amazing father, happy birthday! Your love has been a guiding light in my life. I hope this year brings you as much happiness as you have given me. You are truly one of a kind! 🎂💞"
  },
  {
    id: 45,
    content:
      "Happy birthday to the man who means the world to me! Your support and encouragement have helped me through so much. May your day be filled with all the love you give to others. You are my inspiration! 🎊❤️"
  },
  {
    id: 46,
    content:
      "To my beloved dad, happy birthday! You have a heart of gold, and I am so thankful for everything you do. May this year be filled with joy, laughter, and all your dreams coming true. You are my hero! 🎈💖"
  },
  {
    id: 47,
    content:
      "Happy birthday, Dad! Your love is a gift I cherish every day. May your special day be filled with happiness, good health, and all the things you enjoy most. I love you more than words can express! 🎂💞"
  },
  {
    id: 48,
    content:
      "To my wonderful father, happy birthday! Your wisdom and kindness have guided me through life. May this year bring you as much joy as you have given to our family. You are a true blessing! 🌹💖"
  },
  {
    id: 49,
    content:
      "Happy birthday to my amazing dad! Your strength and love inspire me every day. I hope your day is filled with laughter, good food, and all the things you enjoy. You are the best! 🎈❤️"
  },
  {
    id: 50,
    content:
      "To my dear father, happy birthday! Your love has been a constant source of comfort and strength. May this year bring you endless joy and all the happiness you deserve. I am proud to be your child! 🎊💖"
  },
  {
    id: 51,
    content:
      "Happy birthday, Dad! You are my role model, and I am grateful for your support and guidance. May your special day be filled with love, laughter, and all the things that bring you joy. You mean everything to me! 🎂💞"
  },
  {
    id: 52,
    content:
      "To my incredible father, happy birthday! Your love and wisdom have shaped my life in countless ways. May this year bring you all the happiness and health you deserve. You are a true blessing! 🎉💖"
  },
  {
    id: 53,
    content:
      "Happy birthday to the best dad ever! Your kindness and strength are qualities I admire every day. May your special day be filled with love, laughter, and all your favorite things. You are loved beyond measure! 🌟❤️"
  },
  {
    id: 54,
    content:
      "To my beloved dad, happy birthday! Your support has been my anchor in life's storms. May this year bring you joy, good health, and all the adventures you dream of. You are my hero! 🎈💖"
  },
  {
    id: 55,
    content:
      "Happy birthday, Dad! You have a heart of gold and a spirit that inspires everyone around you. May your special day be filled with joy, laughter, and all the things you love most. You are my rock! 🎊💞"
  },
  {
    id: 56,
    content:
      "To my amazing father, happy birthday! Your love is a guiding light in my life. I hope this year brings you as much joy as you have given to our family. You are truly one of a kind! 🎂❤️"
  },
  {
    id: 57,
    content:
      "Happy birthday to my wonderful dad! Your wisdom and kindness have guided me through life. May this year bring you as much joy as you have given to our family. You are a true blessing! 🎉💖"
  },
  {
    id: 58,
    content:
      "To my incredible father, happy birthday! Your love and support mean everything to me. May your day be filled with laughter, good food, and all the things that make you smile. You are my hero! 🎈💞"
  },
  {
    id: 59,
    content:
      "Happy birthday, Dad! You are my role model, and I am grateful for your support and guidance. May your special day be filled with love, laughter, and all the things that bring you joy. You mean everything to me! 🎊❤️"
  },
  {
    id: 60,
    content:
      "To my beloved dad, happy birthday! Your strength and love inspire me every day. May this year bring you as much happiness as you have given me. I adore you! 🎂💖"
  },
  {
    id: 61,
    content:
      "Happy birthday to the best dad in the world! Your love and guidance have shaped me into who I am today. May your day be filled with joy, laughter, and all the things you love most. You deserve every bit of happiness! 🎉💞"
  },
  {
    id: 62,
    content:
      "To my incredible father, happy birthday! Your strength and wisdom inspire me every day. I hope this year brings you all the joy you bring into my life. Thank you for being my rock! 🎈❤️"
  },
  {
    id: 63,
    content:
      "Happy birthday, Dad! You are my hero, my mentor, and my friend. May your special day be filled with love, laughter, and all your favorite things. I am so grateful for you! 🌟💖"
  },
  {
    id: 64,
    content:
      "To my amazing father, happy birthday! Your love has been a guiding light in my life. I hope this year brings you as much happiness as you have given me. You are truly one of a kind! 🎂💞"
  },
  {
    id: 65,
    content:
      "Happy birthday to the man who means the world to me! Your support and encouragement have helped me through so much. May your day be filled with all the love you give to others. You are my inspiration! 🎊❤️"
  },
  {
    id: 66,
    content:
      "To my beloved dad, happy birthday! You have a heart of gold, and I am so thankful for everything you do. May this year be filled with joy, laughter, and all your dreams coming true. You are my hero! 🎈💖"
  },
  {
    id: 67,
    content:
      "Happy birthday, Dad! Your love is a gift I cherish every day. May your special day be filled with happiness, good health, and all the things you enjoy most. I love you more than words can express! 🎂💞"
  },
  {
    id: 68,
    content:
      "To my wonderful father, happy birthday! Your wisdom and kindness have guided me through life. May this year bring you as much joy as you have given to our family. You are a true blessing! 🌹💖"
  },
  {
    id: 69,
    content:
      "Happy birthday to my amazing dad! Your strength and love inspire me every day. I hope your day is filled with laughter, good food, and all the things you enjoy. You are the best! 🎈❤️"
  },
  {
    id: 70,
    content:
      "To my dear father, happy birthday! Your love has been a constant source of comfort and strength. May this year bring you endless joy and all the happiness you deserve. I am proud to be your child! 🎊💖"
  },
  {
    id: 71,
    content:
      "Happy birthday, Dad! You are my role model, and I am grateful for your support and guidance. May your special day be filled with love, laughter, and all the things that bring you joy. You mean everything to me! 🎂💞"
  },
  {
    id: 72,
    content:
      "To my incredible father, happy birthday! Your love and wisdom have shaped my life in countless ways. May this year bring you all the happiness and health you deserve. You are a true blessing! 🎉💖"
  },
  {
    id: 73,
    content:
      "Happy birthday to the best dad ever! Your kindness and strength are qualities I admire every day. May your special day be filled with love, laughter, and all your favorite things. You are loved beyond measure! 🌟❤️"
  },
  {
    id: 74,
    content:
      "To my beloved dad, happy birthday! Your support has been my anchor in life's storms. May this year bring you joy, good health, and all the adventures you dream of. You are my hero! 🎈💖"
  },
  {
    id: 75,
    content:
      "Happy birthday, Dad! You have a heart of gold and a spirit that inspires everyone around you. May your special day be filled with joy, laughter, and all the things you love most. You are my rock! 🎊💞"
  },
  {
    id: 76,
    content:
      "To my amazing father, happy birthday! Your love is a guiding light in my life. I hope this year brings you as much joy as you have given to our family. You are truly one of a kind! 🎂❤️"
  },
  {
    id: 77,
    content:
      "Happy birthday to my wonderful dad! Your wisdom and kindness have guided me through life. May this year bring you as much joy as you have given to our family. You are a true blessing! 🎉💖"
  },
  {
    id: 78,
    content:
      "To my incredible father, happy birthday! Your love and support mean everything to me. May your day be filled with laughter, good food, and all the things that make you smile. You are my hero! 🎈💞"
  },
  {
    id: 79,
    content:
      "Happy birthday, Dad! You are my role model, and I am grateful for your support and guidance. May your special day be filled with love, laughter, and all the things that bring you joy. You mean everything to me! 🎊❤️"
  },
  {
    id: 80,
    content:
      "To my beloved dad, happy birthday! Your strength and love inspire me every day. May this year bring you as much happiness as you have given me. I adore you! 🎂💖"
  },
  {
    id: 81,
    content:
      "Happy birthday to the best dad in the world! Your love and guidance have shaped me into who I am today. May your day be filled with joy, laughter, and all the things you love most. You deserve every bit of happiness! 🎉💞"
  },
  {
    id: 82,
    content:
      "To my incredible father, happy birthday! Your strength and wisdom inspire me every day. I hope this year brings you all the joy you bring into my life. Thank you for being my rock! 🎈❤️"
  },
  {
    id: 83,
    content:
      "Happy birthday, Dad! You are my hero, my mentor, and my friend. May your special day be filled with love, laughter, and all your favorite things. I am so grateful for you! 🌟💖"
  },
  {
    id: 84,
    content:
      "To my amazing father, happy birthday! Your love has been a guiding light in my life. I hope this year brings you as much happiness as you have given me. You are truly one of a kind! 🎂💞"
  },
  {
    id: 85,
    content:
      "Happy birthday to the man who means the world to me! Your support and encouragement have helped me through so much. May your day be filled with all the love you give to others. You are my inspiration! 🎊❤️"
  },
  {
    id: 86,
    content:
      "To my beloved dad, happy birthday! You have a heart of gold, and I am so thankful for everything you do. May this year be filled with joy, laughter, and all your dreams coming true. You are my hero! 🎈💖"
  },
  {
    id: 87,
    content:
      "Happy birthday, Dad! Your love is a gift I cherish every day. May your special day be filled with happiness, good health, and all the things you enjoy most. I love you more than words can express! 🎂💞"
  },
  {
    id: 88,
    content:
      "To my wonderful father, happy birthday! Your wisdom and kindness have guided me through life. May this year bring you as much joy as you have given to our family. You are a true blessing! 🌹💖"
  },
  {
    id: 89,
    content:
      "Happy birthday to my amazing dad! Your strength and love inspire me every day. I hope your day is filled with laughter, good food, and all the things you enjoy. You are the best! 🎈❤️"
  },
  {
    id: 90,
    content:
      "To my dear father, happy birthday! Your love has been a constant source of comfort and strength. May this year bring you endless joy and all the happiness you deserve. I am proud to be your child! 🎊💖"
  },
  {
    id: 91,
    content:
      "Happy birthday, Dad! You are my role model, and I am grateful for your support and guidance. May your special day be filled with love, laughter, and all the things that bring you joy. You mean everything to me! 🎂💞"
  },
  {
    id: 92,
    content:
      "To my incredible father, happy birthday! Your love and wisdom have shaped my life in countless ways. May this year bring you all the happiness and health you deserve. You are a true blessing! 🎉💖"
  },
  {
    id: 93,
    content:
      "Happy birthday to the best dad ever! Your kindness and strength are qualities I admire every day. May your special day be filled with love, laughter, and all your favorite things. You are loved beyond measure! 🌟❤️"
  },
  {
    id: 94,
    content:
      "To my beloved dad, happy birthday! Your support has been my anchor in life's storms. May this year bring you joy, good health, and all the adventures you dream of. You are my hero! 🎈💖"
  },
  {
    id: 95,
    content:
      "Happy birthday, Dad! You have a heart of gold and a spirit that inspires everyone around you. May your special day be filled with joy, laughter, and all the things you love most. You are my rock! 🎊💞"
  },
  {
    id: 96,
    content:
      "To my amazing father, happy birthday! Your love is a guiding light in my life. I hope this year brings you as much joy as you have given to our family. You are truly one of a kind! 🎂❤️"
  },
  {
    id: 97,
    content:
      "Happy birthday to my wonderful dad! Your wisdom and kindness have guided me through life. May this year bring you as much joy as you have given to our family. You are a true blessing! 🎉💖"
  },
  {
    id: 98,
    content:
      "To my incredible father, happy birthday! Your love and support mean everything to me. May your day be filled with laughter, good food, and all the things that make you smile. You are my hero! 🎈💞"
  },
  {
    id: 99,
    content:
      "Happy birthday, Dad! You are my role model, and I am grateful for your support and guidance. May your special day be filled with love, laughter, and all the things that bring you joy. You mean everything to me! 🎊❤️"
  },
  {
    id: 100,
    content:
      "To my beloved dad, happy birthday! Your strength and love inspire me every day. May this year bring you as much happiness as you have given me. I adore you! 🎂💖"
  },
  {
    id: 101,
    content:
      "Happy birthday to the best dad in the world! Your love and guidance have shaped me into who I am today. May your day be filled with joy, laughter, and all the things you love most. You deserve every bit of happiness! 🎉💞"
  },
  {
    id: 102,
    content:
      "To my incredible father, happy birthday! Your strength and wisdom inspire me every day. I hope this year brings you all the joy you bring into my life. Thank you for being my rock! 🎈❤️"
  },
  {
    id: 103,
    content:
      "Happy birthday, Dad! You are my hero, my mentor, and my friend. May your special day be filled with love, laughter, and all your favorite things. I am so grateful for you! 🌟💖"
  },
  {
    id: 104,
    content:
      "To my amazing father, happy birthday! Your love has been a guiding light in my life. I hope this year brings you as much happiness as you have given me. You are truly one of a kind! 🎂💞"
  },
  {
    id: 105,
    content:
      "Happy birthday to the man who means the world to me! Your support and encouragement have helped me through so much. May your day be filled with all the love you give to others. You are my inspiration! 🎊❤️"
  },
  {
    id: 106,
    content:
      "To my beloved dad, happy birthday! You have a heart of gold, and I am so thankful for everything you do. May this year be filled with joy, laughter, and all your dreams coming true. You are my hero! 🎈💖"
  },
  {
    id: 107,
    content:
      "Happy birthday, Dad! Your love is a gift I cherish every day. May your special day be filled with happiness, good health, and all the things you enjoy most. I love you more than words can express! 🎂💞"
  },
  {
    id: 108,
    content:
      "To my wonderful father, happy birthday! Your wisdom and kindness have guided me through life. May this year bring you as much joy as you have given to our family. You are a true blessing! 🌹💖"
  },
  {
    id: 109,
    content:
      "Happy birthday to my amazing dad! Your strength and love inspire me every day. I hope your day is filled with laughter, good food, and all the things you enjoy. You are the best! 🎈❤️"
  },
  {
    id: 110,
    content:
      "To my dear father, happy birthday! Your love has been a constant source of comfort and strength. May this year bring you endless joy and all the happiness you deserve. I am proud to be your child! 🎊💖"
  },
  {
    id: 111,
    content:
      "Happy birthday, Dad! You are my role model, and I am grateful for your support and guidance. May your special day be filled with love, laughter, and all the things that bring you joy. You mean everything to me! 🎂💞"
  },
  {
    id: 112,
    content:
      "To my incredible father, happy birthday! Your love and wisdom have shaped my life in countless ways. May this year bring you all the happiness and health you deserve. You are a true blessing! 🎉💖"
  },
  {
    id: 113,
    content:
      "Happy birthday to the best dad ever! Your kindness and strength are qualities I admire every day. May your special day be filled with love, laughter, and all your favorite things. You are loved beyond measure! 🌟❤️"
  },
  {
    id: 114,
    content:
      "To my beloved dad, happy birthday! Your support has been my anchor in life's storms. May this year bring you joy, good health, and all the adventures you dream of. You are my hero! 🎈💖"
  },
  {
    id: 115,
    content:
      "Happy birthday, Dad! You have a heart of gold and a spirit that inspires everyone around you. May your special day be filled with joy, laughter, and all the things you love most. You are my rock! 🎊💞"
  },
  {
    id: 116,
    content:
      "To my amazing father, happy birthday! Your love is a guiding light in my life. I hope this year brings you as much joy as you have given to our family. You are truly one of a kind! 🎂❤️"
  },
  {
    id: 117,
    content:
      "Happy birthday to my wonderful dad! Your wisdom and kindness have guided me through life. May this year bring you as much joy as you have given to our family. You are a true blessing! 🎉💖"
  },
  {
    id: 118,
    content:
      "To my incredible father, happy birthday! Your love and support mean everything to me. May your day be filled with laughter, good food, and all the things that make you smile. You are my hero! 🎈💞"
  },
  {
    id: 119,
    content:
      "Happy birthday, Dad! You are my role model, and I am grateful for your support and guidance. May your special day be filled with love, laughter, and all the things that bring you joy. You mean everything to me! 🎊❤️"
  },
  {
    id: 120,
    content:
      "To my beloved dad, happy birthday! Your strength and love inspire me every day. May this year bring you as much happiness as you have given me. I adore you! 🎂💖"
  }
];

const mother = [
  {
    id: 1,
    content:
      "Happy birthday, Mom! Your love is my guiding light. May this special day bring you as much happiness as you have given me! 🎉💖"
  },
  {
    id: 2,
    content:
      "To my wonderful mother, happy birthday! Your strength inspires me every day. May your year be filled with joy and love! 🎂❤️"
  },
  {
    id: 3,
    content:
      "Happy birthday, Mom! Your kindness is a treasure that brightens my life. May your day be filled with all the love you deserve! 🌷💞"
  },
  {
    id: 4,
    content:
      "To my sweet mom, happy birthday! Your laughter is the music of my heart. May this day bring you endless joy! 🎈💖"
  },
  {
    id: 5,
    content:
      "Happy birthday, Mom! You are my rock and my greatest source of inspiration. Wishing you a day full of beautiful moments! 🎉💗"
  },
  {
    id: 6,
    content:
      "To my dearest mom, happy birthday! Your love gives me strength and courage. May your day be filled with all the happiness you bring to others! 🌹❤️"
  },
  {
    id: 7,
    content:
      "Happy birthday, Mom! Your hugs are my safe haven. May your special day be filled with love, laughter, and endless joy! 🎂💖"
  },
  {
    id: 8,
    content:
      "To my amazing mom, happy birthday! Your heart is a garden of love that blooms in my life. May this year bring you all the happiness you give! 🌼💞"
  },
  {
    id: 9,
    content:
      "Happy birthday, Mom! You are a beacon of light in my life. May your day shine as brightly as your love! 🎈❤️"
  },
  {
    id: 10,
    content:
      "To my beloved mom, happy birthday! Your wisdom and guidance are priceless gifts. Wishing you a day filled with all your favorite things! 🎉💖"
  },
  {
    id: 11,
    content:
      "Happy birthday, Mom! You make every moment special with your love. May your day be as wonderful as you are! 🌷💗"
  },
  {
    id: 12,
    content:
      "To my wonderful mother, happy birthday! Your support means the world to me. May your day be filled with all the joy you bring! 🎂❤️"
  },
  {
    id: 13,
    content:
      "Happy birthday, Mom! You are my biggest cheerleader and my greatest inspiration. May your day be filled with love and laughter! 🎈💖"
  },
  {
    id: 14,
    content:
      "To my amazing mom, happy birthday! Your love is my greatest treasure. Wishing you a year full of happiness and health! 🌼💞"
  },
  {
    id: 15,
    content:
      "Happy birthday, Mom! You are my guiding star and my source of joy. May this special day bring you endless happiness! 🎉❤️"
  },
  {
    id: 16,
    content:
      "To my sweet mom, happy birthday! Your strength and resilience inspire me every day. May your year be filled with love and success! 🎂💖"
  },
  {
    id: 17,
    content:
      "Happy birthday, Mom! Your love is a warm embrace that makes everything better. May your day be as beautiful as your heart! 🌷💞"
  },
  {
    id: 18,
    content:
      "To my dearest mom, happy birthday! Your smile lights up my world. May this year bring you all the joy you give to others! 🎈❤️"
  },
  {
    id: 19,
    content:
      "Happy birthday, Mom! You are a true blessing in my life. May your special day be filled with love, laughter, and surprises! 🎉💖"
  },
  {
    id: 20,
    content:
      "To my beloved mom, happy birthday! Your love is the foundation of my happiness. Wishing you a day as wonderful as you are! 🌹💗"
  },
  {
    id: 21,
    content:
      "Happy birthday, Mom! You are my heart and my home. May your day be filled with all the love you share! 🎂❤️"
  },
  {
    id: 22,
    content:
      "To my wonderful mother, happy birthday! Your kindness and compassion make the world a better place. May your day be as beautiful as your soul! 🌼💞"
  },
  {
    id: 23,
    content:
      "Happy birthday, Mom! Your love is a treasure that I cherish every day. May your year be filled with happiness and joy! 🎈💖"
  },
  {
    id: 24,
    content:
      "To my amazing mom, happy birthday! Your strength and wisdom guide me in everything I do. Wishing you a day filled with all your favorite things! 🎉❤️"
  },
  {
    id: 25,
    content:
      "Happy birthday, Mom! You are the heart of our family and the source of our happiness. May this day be as special as you are! 🌷💗"
  },
  {
    id: 26,
    content:
      "To my sweet mom, happy birthday! Your love is a gift that keeps on giving. May your day be filled with joy and laughter! 🎂💞"
  },
  {
    id: 27,
    content:
      "Happy birthday, Mom! You inspire me to be the best version of myself. May your day be filled with all the love you share with others! 🎈❤️"
  },
  {
    id: 28,
    content:
      "To my dearest mom, happy birthday! Your nurturing heart has shaped who I am today. Wishing you a year full of love and joy! 🎉💖"
  },
  {
    id: 29,
    content:
      "Happy birthday, Mom! You are my superhero and my greatest support. May this special day bring you as much joy as you bring to my life! 🌹💗"
  },
  {
    id: 30,
    content:
      "To my beloved mom, happy birthday! Your love is my safe haven. May your day be filled with all the beauty you bring to our lives! 🎂❤️"
  },
  {
    id: 31,
    content:
      "Happy birthday, Mom! Your laughter is the music of my soul. May this day be filled with all the happiness you deserve! 🌼💞"
  },
  {
    id: 32,
    content:
      "To my wonderful mother, happy birthday! Your compassion and kindness make the world a better place. May your year be filled with joy! 🎈💖"
  },
  {
    id: 33,
    content:
      "Happy birthday, Mom! You are my guiding light and my biggest inspiration. Wishing you a day full of love and laughter! 🎉❤️"
  },
  {
    id: 34,
    content:
      "To my amazing mom, happy birthday! Your love is a treasure that I cherish. May this special day bring you all the joy you give! 🌷💗"
  },
  {
    id: 35,
    content:
      "Happy birthday, Mom! You are the heart of our family. May your day be filled with all the love you share with us! 🎂💞"
  },
  {
    id: 36,
    content:
      "To my sweet mom, happy birthday! Your strength and grace inspire me every day. May this year bring you happiness and health! 🎈❤️"
  },
  {
    id: 37,
    content:
      "Happy birthday, Mom! Your love is my greatest gift. May your special day be filled with all your heart's desires! 🎉💖"
  },
  {
    id: 38,
    content:
      "To my dearest mom, happy birthday! Your smile brings joy to my life. Wishing you a day as wonderful as you are! 🌹💗"
  },
  {
    id: 39,
    content:
      "Happy birthday, Mom! You are my rock and my greatest support. May this day be filled with love and joy! 🎂❤️"
  },
  {
    id: 40,
    content:
      "To my beloved mom, happy birthday! Your love is a treasure that I hold dear. May your day be filled with happiness and surprises! 🎈💞"
  },
  {
    id: 41,
    content:
      "Happy birthday, Mom! Your kindness touches everyone you meet. May your year be filled with all the love you give! 🎉💖"
  },
  {
    id: 42,
    content:
      "To my wonderful mother, happy birthday! Your strength and resilience are inspiring. May your day be filled with all your favorite things! 🌷❤️"
  },
  {
    id: 43,
    content:
      "Happy birthday, Mom! You make every moment special. May your day be as beautiful as your heart! 🎂💞"
  },
  {
    id: 44,
    content:
      "To my amazing mom, happy birthday! Your love and support mean the world to me. Wishing you a year full of joy and happiness! 🎈💖"
  },
  {
    id: 45,
    content:
      "Happy birthday, Mom! You are my guiding star. May your special day shine as brightly as your love! 🎉❤️"
  },
  {
    id: 46,
    content:
      "To my sweet mom, happy birthday! Your laughter fills my heart with joy. May this year bring you all the happiness you deserve! 🌼💗"
  },
  {
    id: 47,
    content:
      "Happy birthday, Mom! You are my heart's desire and my greatest treasure. May your day be filled with love and laughter! 🎂💞"
  },
  {
    id: 48,
    content:
      "To my dearest mom, happy birthday! Your wisdom guides me every day. Wishing you a year full of love and joy! 🎈❤️"
  },
  {
    id: 49,
    content:
      "Happy birthday, Mom! You are a blessing in my life. May your special day be filled with all the joy you bring to others! 🎉💖"
  },
  {
    id: 50,
    content:
      "To my beloved mom, happy birthday! Your love is my guiding light. May your day be as wonderful as you are! 🌹💗"
  },
  {
    id: 51,
    content:
      "Happy birthday, Mom! Your kindness is a gift that brightens my life. May your day be filled with love and joy! 🎂❤️"
  },
  {
    id: 52,
    content:
      "To my wonderful mother, happy birthday! Your strength inspires me every day. May your year be filled with happiness and love! 🎈💞"
  },
  {
    id: 53,
    content:
      "Happy birthday, Mom! You make every moment special with your love. May your day be as beautiful as your heart! 🎉💖"
  },
  {
    id: 54,
    content:
      "To my amazing mom, happy birthday! Your love is a treasure that I cherish. May this special day bring you joy and laughter! 🌷❤️"
  },
  {
    id: 55,
    content:
      "Happy birthday, Mom! You are my guiding star and my greatest inspiration. Wishing you a day filled with love! 🎂💞"
  },
  {
    id: 56,
    content:
      "To my sweet mom, happy birthday! Your warmth and kindness light up my life. May your year be filled with joy and success! 🎈💖"
  },
  {
    id: 57,
    content:
      "Happy birthday, Mom! You are my heart and my home. May your day be filled with love and laughter! 🎉❤️"
  },
  {
    id: 58,
    content:
      "To my dearest mom, happy birthday! Your strength and resilience are inspiring. Wishing you a year full of happiness! 🌼💗"
  },
  {
    id: 59,
    content:
      "Happy birthday, Mom! Your love is my greatest gift. May your special day be as wonderful as you are! 🎂💞"
  },
  {
    id: 60,
    content:
      "To my beloved mom, happy birthday! Your kindness and compassion make the world a better place. May your day be filled with joy! 🎈❤️"
  },
  {
    id: 61,
    content:
      "Happy birthday, Mom! You are my guiding light and my biggest supporter. May your day be filled with all the love you share! 🎉💖"
  },
  {
    id: 62,
    content:
      "To my wonderful mother, happy birthday! Your love is a treasure that I cherish every day. May this year bring you joy! 🌷💗"
  },
  {
    id: 63,
    content:
      "Happy birthday, Mom! You are the heart of our family. May your special day be filled with all the love you give! 🎂💞"
  },
  {
    id: 64,
    content:
      "To my amazing mom, happy birthday! Your strength and grace inspire me every day. Wishing you a year full of happiness! 🎈❤️"
  },
  {
    id: 65,
    content:
      "Happy birthday, Mom! Your laughter is the music of my soul. May your day be as beautiful as your heart! 🎉💖"
  },
  {
    id: 66,
    content:
      "To my sweet mom, happy birthday! Your love is a gift that keeps on giving. May your day be filled with joy and surprises! 🌼💞"
  },
  {
    id: 67,
    content:
      "Happy birthday, Mom! You are my biggest cheerleader. May your special day bring you as much joy as you bring to me! 🎂❤️"
  },
  {
    id: 68,
    content:
      "To my dearest mom, happy birthday! Your wisdom guides me in every aspect of my life. Wishing you a year full of love and happiness! 🎈💖"
  },
  {
    id: 69,
    content:
      "Happy birthday, Mom! You are my rock and my greatest inspiration. May your day be filled with love and laughter! 🎉💗"
  },
  {
    id: 70,
    content:
      "To my beloved mom, happy birthday! Your love is my safe haven. May your special day be filled with joy and beauty! 🌹💞"
  },
  {
    id: 71,
    content:
      "Happy birthday, Mom! Your kindness touches everyone you meet. May this year bring you all the happiness you deserve! 🎂❤️"
  },
  {
    id: 72,
    content:
      "To my wonderful mother, happy birthday! Your strength and resilience inspire me every day. May your day be filled with joy and surprises! 🎈💖"
  },
  {
    id: 73,
    content:
      "Happy birthday, Mom! You make every moment special with your love. May your day be as beautiful as you are! 🎉💗"
  },
  {
    id: 74,
    content:
      "To my amazing mom, happy birthday! Your love is a treasure that I hold dear. May this special day bring you happiness and joy! 🌼💞"
  },
  {
    id: 75,
    content:
      "Happy birthday, Mom! You are my guiding light. May your special day shine as brightly as your love! 🎂❤️"
  },
  {
    id: 76,
    content:
      "To my sweet mom, happy birthday! Your warmth and kindness light up my life. May your year be filled with love and success! 🎈💖"
  },
  {
    id: 77,
    content:
      "Happy birthday, Mom! You are my heart and my home. May your day be filled with love and laughter! 🎉❤️"
  },
  {
    id: 78,
    content:
      "To my dearest mom, happy birthday! Your strength and resilience are inspiring. Wishing you a year full of happiness! 🌼💗"
  },
  {
    id: 79,
    content:
      "Happy birthday, Mom! Your love is my greatest gift. May your special day be as wonderful as you are! 🎂💞"
  },
  {
    id: 80,
    content:
      "To my beloved mom, happy birthday! Your kindness and compassion make the world a better place. May your day be filled with joy! 🎈❤️"
  },
  {
    id: 81,
    content:
      "Happy birthday, Mom! You are my guiding light and my biggest supporter. May your day be filled with all the love you share! 🎉💖"
  },
  {
    id: 82,
    content:
      "To my wonderful mother, happy birthday! Your love is a treasure that I cherish every day. May this year bring you joy! 🌷💗"
  },
  {
    id: 83,
    content:
      "Happy birthday, Mom! You are the heart of our family. May your special day be filled with all the love you give! 🎂💞"
  },
  {
    id: 84,
    content:
      "To my amazing mom, happy birthday! Your strength and grace inspire me every day. Wishing you a year full of happiness! 🎈❤️"
  },
  {
    id: 85,
    content:
      "Happy birthday, Mom! Your laughter is the music of my soul. May your day be as beautiful as your heart! 🎉💖"
  },
  {
    id: 86,
    content:
      "To my sweet mom, happy birthday! Your love is a gift that keeps on giving. May your day be filled with joy and surprises! 🌼💞"
  },
  {
    id: 87,
    content:
      "Happy birthday, Mom! You are my biggest cheerleader. May your special day bring you as much joy as you bring to me! 🎂❤️"
  },
  {
    id: 88,
    content:
      "To my dearest mom, happy birthday! Your wisdom guides me in every aspect of my life. Wishing you a year full of love and happiness! 🎈💖"
  },
  {
    id: 89,
    content:
      "Happy birthday, Mom! You are my rock and my greatest inspiration. May your day be filled with love and laughter! 🎉💗"
  },
  {
    id: 90,
    content:
      "To my beloved mom, happy birthday! Your love is my safe haven. May your special day be filled with joy and beauty! 🌹💞"
  },
  {
    id: 91,
    content:
      "Happy birthday, Mom! Your kindness touches everyone you meet. May this year bring you all the happiness you deserve! 🎂❤️"
  },
  {
    id: 92,
    content:
      "To my wonderful mother, happy birthday! Your strength and resilience inspire me every day. May your day be filled with joy and surprises! 🎈💖"
  },
  {
    id: 93,
    content:
      "Happy birthday, Mom! You make every moment special with your love. May your day be as beautiful as you are! 🎉💗"
  },
  {
    id: 94,
    content:
      "To my amazing mom, happy birthday! Your love is a treasure that I hold dear. May this special day bring you happiness and joy! 🌼💞"
  },
  {
    id: 95,
    content:
      "Happy birthday, Mom! You are my guiding light. May your special day shine as brightly as your love! 🎂❤️"
  },
  {
    id: 96,
    content:
      "To my sweet mom, happy birthday! Your warmth and kindness light up my life. May your year be filled with love and success! 🎈💖"
  },
  {
    id: 97,
    content:
      "Happy birthday, Mom! You are my heart and my home. May your day be filled with love and laughter! 🎉❤️"
  },
  {
    id: 98,
    content:
      "To my dearest mom, happy birthday! Your strength and resilience are inspiring. Wishing you a year full of happiness! 🌼💗"
  },
  {
    id: 99,
    content:
      "Happy birthday, Mom! Your love is my greatest gift. May your special day be as wonderful as you are! 🎂💞"
  },
  {
    id: 100,
    content:
      "To my beloved mom, happy birthday! Your kindness and compassion make the world a better place. May your day be filled with joy! 🎈❤️"
  }
];

const auntie = [
  {
    id: 1,
    content:
      "Happy birthday, dear Auntie! Your warmth and wisdom enrich our lives in countless ways. May your day be as bright as your spirit! 🎉💖"
  },
  {
    id: 2,
    content:
      "To my beloved Auntie, happy birthday! You bring so much joy and laughter to our family. Wishing you a year filled with love and happiness! 🌼❤️"
  },
  {
    id: 3,
    content:
      "Happy birthday to my amazing Auntie! Your kindness and strength inspire us all. May your special day be surrounded by love and laughter! 🎂💞"
  },
  {
    id: 4,
    content:
      "To my wonderful Auntie, happy birthday! You have a heart of gold that shines brightly. May this year bring you all the joy you deserve! 🎈💖"
  },
  {
    id: 5,
    content:
      "Happy birthday, Auntie! You are a treasure in our family, and your love makes everything better. Enjoy your special day to the fullest! 🎉❤️"
  },
  {
    id: 6,
    content:
      "To my dearest Auntie, happy birthday! Your laughter and love are gifts that I cherish every day. May your year be filled with beautiful moments! 🌹💞"
  },
  {
    id: 7,
    content:
      "Happy birthday to my sweet Auntie! Your caring nature and warm hugs make the world a better place. Wishing you a fantastic day! 🎂💖"
  },
  {
    id: 8,
    content:
      "To my incredible Auntie, happy birthday! Your wisdom and guidance have shaped my life in so many ways. May this year bring you happiness and peace! 🎈❤️"
  },
  {
    id: 9,
    content:
      "Happy birthday, Auntie! You have a magical way of bringing joy into our lives. May your special day be filled with love and laughter! 🎉💞"
  },
  {
    id: 10,
    content:
      "To my beloved Auntie, happy birthday! Your love is a blessing that I treasure. Wishing you a year full of happiness and adventures! 🌼💖"
  },
  {
    id: 11,
    content:
      "Happy birthday, dear Auntie! Your spirit lights up our family. May your day be as amazing as you are, filled with love and joy! 🎂❤️"
  },
  {
    id: 12,
    content:
      "To my fabulous Auntie, happy birthday! Your laughter is the music of our family gatherings. May your year be filled with wonderful memories! 🎈💞"
  },
  {
    id: 13,
    content:
      "Happy birthday to my wonderful Auntie! Your love and support mean the world to me. May your special day be filled with all your favorite things! 🎉💖"
  },
  {
    id: 14,
    content:
      "To my amazing Auntie, happy birthday! Your kindness and strength inspire everyone around you. Wishing you a year full of blessings and joy! 🌹❤️"
  },
  {
    id: 15,
    content:
      "Happy birthday, Auntie! You are a shining star in our lives. May your day be as bright and beautiful as you are! 🎂💞"
  },
  {
    id: 16,
    content:
      "To my sweet Auntie, happy birthday! Your hugs are the best and your love is priceless. Wishing you a year filled with love and laughter! 🎈💖"
  },
  {
    id: 17,
    content:
      "Happy birthday, dear Auntie! Your support and encouragement mean so much to me. May your day be surrounded by love and joy! 🎉❤️"
  },
  {
    id: 18,
    content:
      "To my beloved Auntie, happy birthday! Your wisdom and love guide me every day. May this year bring you all the happiness you deserve! 🌼💞"
  },
  {
    id: 19,
    content:
      "Happy birthday to my amazing Auntie! You bring so much joy into our lives. May your special day be as wonderful as you are! 🎂💖"
  },
  {
    id: 20,
    content:
      "To my incredible Auntie, happy birthday! Your kindness knows no bounds. Wishing you a year filled with laughter and love! 🎈❤️"
  },
  {
    id: 21,
    content:
      "Happy birthday, Auntie! You are the heart of our family. May your day be filled with all the love you give to others! 🎉💞"
  },
  {
    id: 22,
    content:
      "To my wonderful Auntie, happy birthday! Your love and care make every day brighter. May this year bring you endless joy! 🌹💖"
  },
  {
    id: 23,
    content:
      "Happy birthday, dear Auntie! Your laughter is a gift that brings us all together. Wishing you a day filled with joy and love! 🎂❤️"
  },
  {
    id: 24,
    content:
      "To my beloved Auntie, happy birthday! Your spirit and warmth fill our lives with happiness. May your year be as special as you are! 🎈💞"
  },
  {
    id: 25,
    content:
      "Happy birthday to my sweet Auntie! Your love is a treasure that I hold dear. Wishing you a day filled with joy and laughter! 🎉💖"
  },
  {
    id: 26,
    content:
      "To my amazing Auntie, happy birthday! Your strength and wisdom inspire everyone around you. May this year be filled with beautiful moments! 🌼❤️"
  },
  {
    id: 27,
    content:
      "Happy birthday, Auntie! You are a blessing in my life. May your special day be filled with all the joy you bring to others! 🎂💞"
  },
  {
    id: 28,
    content:
      "To my incredible Auntie, happy birthday! Your love and support mean everything to me. Wishing you a year filled with happiness and adventure! 🎈💖"
  },
  {
    id: 29,
    content:
      "Happy birthday, dear Auntie! Your kindness and compassion make the world a better place. May your day be as wonderful as you are! 🎉❤️"
  },
  {
    id: 30,
    content:
      "To my beloved Auntie, happy birthday! Your spirit is contagious and your love is boundless. Wishing you a fantastic year ahead! 🌹💞"
  },
  {
    id: 31,
    content:
      "Happy birthday to my sweet Auntie! Your laughter fills our hearts with joy. May your day be filled with all the love you give! 🎂💖"
  },
  {
    id: 32,
    content:
      "To my wonderful Auntie, happy birthday! Your warmth and kindness light up my life. May your year be filled with love and happiness! 🎈❤️"
  },
  {
    id: 33,
    content:
      "Happy birthday, Auntie! You are my confidant and friend. May your special day be filled with all your favorite things! 🎉💞"
  },
  {
    id: 34,
    content:
      "To my amazing Auntie, happy birthday! Your love is a guiding light in my life. May this year bring you joy and fulfillment! 🌼💖"
  },
  {
    id: 35,
    content:
      "Happy birthday, dear Auntie! Your laughter is the best medicine. May your day be filled with joy and cherished moments! 🎂❤️"
  },
  {
    id: 36,
    content:
      "To my beloved Auntie, happy birthday! Your strength and resilience inspire us all. Wishing you a year full of love and joy! 🎈💞"
  },
  {
    id: 37,
    content:
      "Happy birthday to my wonderful Auntie! You are the heart of our family. May your day be as special as you are! 🎉💖"
  },
  {
    id: 38,
    content:
      "To my incredible Auntie, happy birthday! Your love and care are gifts that I cherish. May this year bring you happiness and adventure! 🌹❤️"
  },
  {
    id: 39,
    content:
      "Happy birthday, Auntie! Your kindness and generosity touch everyone you meet. May your day be filled with love and laughter! 🎂💞"
  },
  {
    id: 40,
    content:
      "To my sweet Auntie, happy birthday! Your hugs are like sunshine, warming my heart. Wishing you a fantastic day filled with joy! 🎈💖"
  },
  {
    id: 41,
    content:
      "Happy birthday, dear Auntie! Your wisdom and guidance are invaluable. May your year be filled with beautiful moments and cherished memories! 🎉❤️"
  },
  {
    id: 42,
    content:
      "To my beloved Auntie, happy birthday! Your spirit and love make every gathering special. Wishing you a day as amazing as you are! 🌼💞"
  },
  {
    id: 43,
    content:
      "Happy birthday to my amazing Auntie! You bring so much joy and love into our lives. May your special day be filled with happiness! 🎂💖"
  },
  {
    id: 44,
    content:
      "To my incredible Auntie, happy birthday! Your laughter and kindness are a gift to all of us. May this year bring you endless joy! 🎈❤️"
  },
  {
    id: 45,
    content:
      "Happy birthday, Auntie! You are a shining star in my life. May your day be filled with all the love you give to others! 🎉💞"
  },
  {
    id: 46,
    content:
      "To my wonderful Auntie, happy birthday! Your love is a treasure I hold dear. May your year be filled with happiness and adventure! 🌹💖"
  },
  {
    id: 47,
    content:
      "Happy birthday, dear Auntie! Your warmth and generosity touch everyone around you. Wishing you a day filled with joy and laughter! 🎂❤️"
  },
  {
    id: 48,
    content:
      "To my beloved Auntie, happy birthday! Your spirit is uplifting, and your love is unconditional. May your day be as beautiful as you are! 🎈💞"
  },
  {
    id: 49,
    content:
      "Happy birthday to my sweet Auntie! Your laughter is contagious, and your love is priceless. Wishing you a fantastic year ahead! 🎉💖"
  },
  {
    id: 50,
    content:
      "To my amazing Auntie, happy birthday! Your kindness and strength inspire us all. May this year be filled with beautiful moments and joy! 🌼❤️"
  },
  {
    id: 51,
    content:
      "Happy birthday, Auntie! You have a heart of gold that shines brightly. May your day be filled with love and happiness! 🎂💞"
  },
  {
    id: 52,
    content:
      "To my dear Auntie, happy birthday! Your love is a gift that I cherish every day. Wishing you a year full of laughter and joy! 🎈💖"
  },
  {
    id: 53,
    content:
      "Happy birthday, Auntie! Your kindness and compassion are a blessing to all. May your special day be filled with joy and love! 🎉❤️"
  },
  {
    id: 54,
    content:
      "To my beloved Auntie, happy birthday! Your laughter and spirit bring joy to our family. May this year be filled with beautiful moments! 🌼💞"
  },
  {
    id: 55,
    content:
      "Happy birthday to my amazing Auntie! You inspire me with your strength and kindness. Wishing you a day as wonderful as you are! 🎂💖"
  },
  {
    id: 56,
    content:
      "To my incredible Auntie, happy birthday! Your love is a light in my life. May your year be filled with happiness and peace! 🎈❤️"
  },
  {
    id: 57,
    content:
      "Happy birthday, Auntie! Your love and support mean everything to me. May your special day be surrounded by joy and laughter! 🎉💞"
  },
  {
    id: 58,
    content:
      "To my wonderful Auntie, happy birthday! Your spirit and warmth make every moment special. Wishing you a year filled with love and joy! 🌹💖"
  },
  {
    id: 59,
    content:
      "Happy birthday, dear Auntie! Your wisdom and kindness touch the hearts of everyone you meet. May your day be as lovely as you are! 🎂❤️"
  },
  {
    id: 60,
    content:
      "To my beloved Auntie, happy birthday! Your love is a treasure I hold close. May your special day be filled with all your favorite things! 🎈💞"
  },
  {
    id: 61,
    content:
      "Happy birthday to my sweet Auntie! Your laughter brings joy to our family. Wishing you a year full of happiness and adventures! 🎉💖"
  },
  {
    id: 62,
    content:
      "To my incredible Auntie, happy birthday! Your kindness makes the world a better place. May this year bring you all the joy you deserve! 🌼❤️"
  },
  {
    id: 63,
    content:
      "Happy birthday, Auntie! Your love is a guiding light in my life. May your day be filled with joy and cherished moments! 🎂💞"
  },
  {
    id: 64,
    content:
      "To my amazing Auntie, happy birthday! Your strength and resilience inspire me every day. Wishing you a year full of love and joy! 🎈💖"
  },
  {
    id: 65,
    content:
      "Happy birthday, dear Auntie! Your warmth and kindness make every gathering special. May your day be as wonderful as you are! 🎉❤️"
  },
  {
    id: 66,
    content:
      "To my beloved Auntie, happy birthday! Your laughter and love brighten my days. May this year bring you happiness and fulfillment! 🌼💞"
  },
  {
    id: 67,
    content:
      "Happy birthday to my wonderful Auntie! Your spirit is uplifting and your love is unconditional. Wishing you a fantastic year ahead! 🎂💖"
  },
  {
    id: 68,
    content:
      "To my incredible Auntie, happy birthday! Your kindness and generosity are gifts that I cherish. May your special day be filled with love and joy! 🎈❤️"
  },
  {
    id: 69,
    content:
      "Happy birthday, Auntie! You are a shining star in my life. May your day be filled with all the love you give to others! 🎉💞"
  },
  {
    id: 70,
    content:
      "To my wonderful Auntie, happy birthday! Your love is a treasure that I hold dear. May your year be filled with happiness and adventure! 🌹💖"
  },
  {
    id: 71,
    content:
      "Happy birthday, dear Auntie! Your laughter fills our hearts with joy. Wishing you a day filled with all the love you give! 🎂❤️"
  },
  {
    id: 72,
    content:
      "To my beloved Auntie, happy birthday! Your spirit is uplifting and your love is unconditional. May your day be as beautiful as you are! 🎈💞"
  },
  {
    id: 73,
    content:
      "Happy birthday to my sweet Auntie! Your laughter is contagious and your love is priceless. Wishing you a fantastic year ahead! 🎉💖"
  },
  {
    id: 74,
    content:
      "To my amazing Auntie, happy birthday! Your kindness and strength inspire us all. May this year be filled with beautiful moments and joy! 🌼❤️"
  },
  {
    id: 75,
    content:
      "Happy birthday, Auntie! You have a heart of gold that shines brightly. May your day be filled with love and happiness! 🎂💞"
  },
  {
    id: 76,
    content:
      "To my dear Auntie, happy birthday! Your love is a gift that I cherish every day. Wishing you a year full of laughter and joy! 🎈💖"
  },
  {
    id: 77,
    content:
      "Happy birthday, Auntie! Your kindness and compassion are a blessing to all. May your special day be filled with joy and love! 🎉❤️"
  },
  {
    id: 78,
    content:
      "To my beloved Auntie, happy birthday! Your laughter and spirit bring joy to our family. May this year be filled with beautiful moments! 🌼💞"
  },
  {
    id: 79,
    content:
      "Happy birthday to my amazing Auntie! You inspire me with your strength and kindness. Wishing you a day as wonderful as you are! 🎂💖"
  },
  {
    id: 80,
    content:
      "To my incredible Auntie, happy birthday! Your love is a light in my life. May your year be filled with happiness and peace! 🎈❤️"
  },
  {
    id: 81,
    content:
      "Happy birthday, Auntie! Your love and support mean everything to me. May your special day be surrounded by joy and laughter! 🎉💞"
  },
  {
    id: 82,
    content:
      "To my wonderful Auntie, happy birthday! Your spirit and warmth make every moment special. Wishing you a year filled with love and joy! 🌹💖"
  },
  {
    id: 83,
    content:
      "Happy birthday, dear Auntie! Your wisdom and kindness touch the hearts of everyone you meet. May your day be as lovely as you are! 🎂❤️"
  },
  {
    id: 84,
    content:
      "To my beloved Auntie, happy birthday! Your love is a treasure I hold close. May your special day be filled with all your favorite things! 🎈💞"
  },
  {
    id: 85,
    content:
      "Happy birthday to my sweet Auntie! Your laughter brings joy to our family. Wishing you a year full of happiness and adventures! 🎉💖"
  },
  {
    id: 86,
    content:
      "To my incredible Auntie, happy birthday! Your kindness makes the world a better place. May this year bring you all the joy you deserve! 🌼❤️"
  },
  {
    id: 87,
    content:
      "Happy birthday, Auntie! Your love is a guiding light in my life. May your day be filled with joy and cherished moments! 🎂💞"
  },
  {
    id: 88,
    content:
      "To my amazing Auntie, happy birthday! Your strength and resilience inspire me every day. Wishing you a year full of love and joy! 🎈💖"
  },
  {
    id: 89,
    content:
      "Happy birthday, dear Auntie! Your warmth and kindness make every gathering special. May your day be as wonderful as you are! 🎉❤️"
  },
  {
    id: 90,
    content:
      "To my beloved Auntie, happy birthday! Your laughter and love brighten my days. May this year bring you happiness and fulfillment! 🌼💞"
  },
  {
    id: 91,
    content:
      "Happy birthday to my wonderful Auntie! Your spirit is uplifting and your love is unconditional. Wishing you a fantastic year ahead! 🎂💖"
  },
  {
    id: 92,
    content:
      "To my incredible Auntie, happy birthday! Your kindness and generosity are gifts that I cherish. May your special day be filled with love and joy! 🎈❤️"
  },
  {
    id: 93,
    content:
      "Happy birthday, Auntie! You are a shining star in my life. May your day be filled with all the love you give to others! 🎉💞"
  },
  {
    id: 94,
    content:
      "To my wonderful Auntie, happy birthday! Your love is a treasure that I hold dear. May your year be filled with happiness and adventure! 🌹💖"
  },
  {
    id: 95,
    content:
      "Happy birthday, dear Auntie! Your laughter fills our hearts with joy. Wishing you a day filled with all the love you give! 🎂❤️"
  },
  {
    id: 96,
    content:
      "To my beloved Auntie, happy birthday! Your spirit is uplifting and your love is unconditional. May your day be as beautiful as you are! 🎈💞"
  },
  {
    id: 97,
    content:
      "Happy birthday to my sweet Auntie! Your laughter is contagious and your love is priceless. Wishing you a fantastic year ahead! 🎉💖"
  },
  {
    id: 98,
    content:
      "To my amazing Auntie, happy birthday! Your kindness and strength inspire us all. May this year be filled with beautiful moments and joy! 🌼❤️"
  },
  {
    id: 99,
    content:
      "Happy birthday, Auntie! You have a heart of gold that shines brightly. May your day be filled with love and happiness! 🎂💞"
  },
  {
    id: 100,
    content:
      "To my dear Auntie, happy birthday! Your love is a gift that I cherish every day. Wishing you a year full of laughter and joy! 🎈💖"
  }
];

const uncle = [
  {
    id: 1,
    content:
      "Happy birthday to my incredible Uncle! Your wisdom and guidance have shaped my life in so many ways. May your special day be filled with love and happiness! 🎂💙"
  },
  {
    id: 2,
    content:
      "To my amazing Uncle, happy birthday! Your sense of humor and kindness brighten our family gatherings. Wishing you a year full of joy and adventure! 🎉💖"
  },
  {
    id: 3,
    content:
      "Happy birthday, Uncle! You are not just family but also a true friend. May your day be filled with laughter, love, and all your favorite things! 🎈❤️"
  },
  {
    id: 4,
    content:
      "To my wonderful Uncle, happy birthday! Your stories and life lessons are a treasure. May this year bring you countless blessings and joy! 🌟💙"
  },
  {
    id: 5,
    content:
      "Happy birthday to my beloved Uncle! Your support and encouragement mean the world to me. May your day be as fantastic as you are! 🎂💖"
  },
  {
    id: 6,
    content:
      "To my extraordinary Uncle, happy birthday! Your adventurous spirit inspires me. Wishing you a year filled with exciting experiences and happiness! 🎉❤️"
  },
  {
    id: 7,
    content:
      "Happy birthday, Uncle! Your laughter is contagious and your love is boundless. May this special day be filled with all the joy you bring to others! 🎈💙"
  },
  {
    id: 8,
    content:
      "To my caring Uncle, happy birthday! Your wisdom is a guiding light in my life. May your day be filled with love, peace, and unforgettable moments! 🌟💖"
  },
  {
    id: 9,
    content:
      "Happy birthday to my fun-loving Uncle! You make every family gathering brighter. Wishing you a year full of laughter and cherished memories! 🎂❤️"
  },
  {
    id: 10,
    content:
      "To my dear Uncle, happy birthday! Your strength and kindness inspire me daily. May this year be filled with happiness and all your dreams come true! 🎉💙"
  },
  {
    id: 11,
    content:
      "Happy birthday, Uncle! Your generosity knows no bounds. May your special day be surrounded by love and all the people who cherish you! 🎈💖"
  },
  {
    id: 12,
    content:
      "To my remarkable Uncle, happy birthday! Your laughter and joy bring light into our lives. May your day be as wonderful as you are! 🌟❤️"
  },
  {
    id: 13,
    content:
      "Happy birthday to my adventurous Uncle! Your zest for life is inspiring. May this year be filled with thrilling journeys and new experiences! 🎂💙"
  },
  {
    id: 14,
    content:
      "To my loving Uncle, happy birthday! Your guidance has helped shape who I am today. May your day be filled with all the love you give! 🎉💖"
  },
  {
    id: 15,
    content:
      "Happy birthday, Uncle! Your support means everything to me. Wishing you a day full of joy and a year filled with great adventures! 🎈❤️"
  },
  {
    id: 16,
    content:
      "To my fabulous Uncle, happy birthday! Your humor and spirit bring so much joy to our family. May your day be as delightful as you are! 🌟💙"
  },
  {
    id: 17,
    content:
      "Happy birthday to my amazing Uncle! Your love and wisdom are a true gift. May this year bring you peace and fulfillment in all you do! 🎂💖"
  },
  {
    id: 18,
    content:
      "To my beloved Uncle, happy birthday! Your presence lights up our lives. May your special day be filled with everything you love! 🎉❤️"
  },
  {
    id: 19,
    content:
      "Happy birthday, Uncle! Your passion for life is inspiring. Wishing you a year filled with happiness and endless possibilities! 🎈💙"
  },
  {
    id: 20,
    content:
      "To my wonderful Uncle, happy birthday! Your generosity and kindness are unmatched. May your day be filled with laughter and love from all of us! 🌟💖"
  },
  {
    id: 21,
    content:
      "Happy birthday to my extraordinary Uncle! Your adventurous spirit and big heart make every moment special. Wishing you a year full of joy! 🎂❤️"
  },
  {
    id: 22,
    content:
      "To my caring Uncle, happy birthday! Your guidance has been invaluable to me. May your special day be filled with all the love you give! 🎉💙"
  },
  {
    id: 23,
    content:
      "Happy birthday, Uncle! Your laughter and joy are contagious. May your day be filled with cherished moments and happiness! 🎈💖"
  },
  {
    id: 24,
    content:
      "To my incredible Uncle, happy birthday! Your wisdom is a treasure. May this year bring you joy, health, and all your heart desires! 🌟❤️"
  },
  {
    id: 25,
    content:
      "Happy birthday to my beloved Uncle! Your kindness and support mean so much. Wishing you a fantastic day and a wonderful year ahead! 🎂💙"
  },
  {
    id: 26,
    content:
      "To my adventurous Uncle, happy birthday! Your zest for life inspires us all. May your special day be filled with excitement and joy! 🎉💖"
  },
  {
    id: 27,
    content:
      "Happy birthday, Uncle! Your warmth and love are a gift to our family. May your day be filled with everything that makes you happy! 🎈❤️"
  },
  {
    id: 28,
    content:
      "To my amazing Uncle, happy birthday! Your humor brightens our lives. May this year be filled with laughter and unforgettable moments! 🌟💙"
  },
  {
    id: 29,
    content:
      "Happy birthday to my caring Uncle! Your wisdom and support guide me. Wishing you a year filled with love and happiness! 🎂💖"
  },
  {
    id: 30,
    content:
      "To my wonderful Uncle, happy birthday! Your spirit and enthusiasm for life are truly inspiring. May your day be as amazing as you are! 🎉❤️"
  },
  {
    id: 31,
    content:
      "Happy birthday, Uncle! Your generosity and kindness touch everyone around you. May your special day be filled with love and joy! 🎈💙"
  },
  {
    id: 32,
    content:
      "To my extraordinary Uncle, happy birthday! Your adventurous soul inspires me to explore. Wishing you a year full of exciting adventures! 🌟💖"
  },
  {
    id: 33,
    content:
      "Happy birthday to my beloved Uncle! Your love and support are invaluable. May your day be surrounded by family and joy! 🎂❤️"
  },
  {
    id: 34,
    content:
      "To my amazing Uncle, happy birthday! Your laughter and spirit bring so much joy to our lives. May this year be filled with happiness! 🎉💙"
  },
  {
    id: 35,
    content:
      "Happy birthday, Uncle! Your kindness and compassion are a blessing. Wishing you a day filled with love and cherished moments! 🎈💖"
  },
  {
    id: 36,
    content:
      "To my wonderful Uncle, happy birthday! Your wisdom has guided me through life. May your special day be filled with joy and love! 🌟❤️"
  },
  {
    id: 37,
    content:
      "Happy birthday to my adventurous Uncle! Your zest for life is contagious. May this year bring you happiness and exciting new journeys! 🎂💙"
  },
  {
    id: 38,
    content:
      "To my caring Uncle, happy birthday! Your support and encouragement mean everything to me. May your day be as fantastic as you are! 🎉💖"
  },
  {
    id: 39,
    content:
      "Happy birthday, Uncle! Your laughter brightens our family gatherings. Wishing you a year full of joy and adventures! 🎈❤️"
  },
  {
    id: 40,
    content:
      "To my incredible Uncle, happy birthday! Your wisdom and love are invaluable gifts. May your special day be filled with everything you love! 🌟💙"
  },
  {
    id: 41,
    content:
      "Happy birthday to my beloved Uncle! Your kindness and strength inspire me. Wishing you a day filled with joy and a year full of happiness! 🎂💖"
  },
  {
    id: 42,
    content:
      "To my amazing Uncle, happy birthday! Your adventurous spirit is an inspiration. May this year bring you exciting experiences and joy! 🎉❤️"
  },
  {
    id: 43,
    content:
      "Happy birthday, Uncle! Your love and laughter are a gift to our family. May your day be filled with happiness and cherished memories! 🎈💙"
  },
  {
    id: 44,
    content:
      "To my wonderful Uncle, happy birthday! Your warmth and kindness are truly special. May your year ahead be filled with love and joy! 🌟💖"
  },
  {
    id: 45,
    content:
      "Happy birthday to my extraordinary Uncle! Your spirit is uplifting and your love is unconditional. May your day be as amazing as you are! 🎂❤️"
  },
  {
    id: 46,
    content:
      "To my caring Uncle, happy birthday! Your support has been a guiding light in my life. May your special day be filled with love and joy! 🎉💙"
  },
  {
    id: 47,
    content:
      "Happy birthday, Uncle! Your laughter and joy make every family gathering brighter. Wishing you a year full of happiness and adventure! 🎈💖"
  },
  {
    id: 48,
    content:
      "To my incredible Uncle, happy birthday! Your kindness and wisdom are treasures I cherish. May your day be filled with everything you love! 🌟❤️"
  },
  {
    id: 49,
    content:
      "Happy birthday to my beloved Uncle! Your encouragement and love have shaped my life. Wishing you a fantastic day and a wonderful year ahead! 🎂💙"
  },
  {
    id: 50,
    content:
      "To my amazing Uncle, happy birthday! Your adventurous soul inspires us all. May this year be filled with exciting journeys and joy! 🎉💖"
  },
  {
    id: 51,
    content:
      "Happy birthday, Uncle! Your kindness and humor bring so much happiness. May your special day be filled with love and laughter! 🎈❤️"
  },
  {
    id: 52,
    content:
      "To my extraordinary Uncle, happy birthday! Your love and guidance are invaluable gifts. Wishing you a year full of joy and cherished moments! 🌟💙"
  },
  {
    id: 53,
    content:
      "Happy birthday to my beloved Uncle! Your warmth and spirit light up our lives. May your day be as wonderful as you are! 🎂💖"
  },
  {
    id: 54,
    content:
      "To my amazing Uncle, happy birthday! Your adventurous nature inspires me to explore. May this year be filled with thrilling experiences! 🎉❤️"
  },
  {
    id: 55,
    content:
      "Happy birthday, Uncle! Your laughter fills our hearts with joy. May your day be surrounded by all the love you give to others! 🎈💙"
  },
  {
    id: 56,
    content:
      "To my wonderful Uncle, happy birthday! Your wisdom and kindness are a treasure. May your year be filled with happiness and love! 🌟💖"
  },
  {
    id: 57,
    content:
      "Happy birthday to my extraordinary Uncle! Your passion for life is contagious. Wishing you a year filled with joy and adventure! 🎂❤️"
  },
  {
    id: 58,
    content:
      "To my caring Uncle, happy birthday! Your support has helped me grow. May your special day be filled with love and cherished moments! 🎉💙"
  },
  {
    id: 59,
    content:
      "Happy birthday, Uncle! Your spirit and humor make every gathering special. May your day be filled with happiness and laughter! 🎈💖"
  },
  {
    id: 60,
    content:
      "To my incredible Uncle, happy birthday! Your love and wisdom are invaluable gifts. May your day be filled with everything that brings you joy! 🌟❤️"
  },
  {
    id: 61,
    content:
      "Happy birthday to my beloved Uncle! Your kindness and strength inspire me every day. Wishing you a fantastic year ahead! 🎂💙"
  },
  {
    id: 62,
    content:
      "To my amazing Uncle, happy birthday! Your adventurous spirit brings excitement to our lives. May this year be filled with beautiful memories! 🎉💖"
  },
  {
    id: 63,
    content:
      "Happy birthday, Uncle! Your laughter and joy are infectious. May your special day be filled with love and happiness! 🎈❤️"
  },
  {
    id: 64,
    content:
      "To my wonderful Uncle, happy birthday! Your wisdom and love guide me every day. May your year be filled with joy and fulfillment! 🌟💙"
  },
  {
    id: 65,
    content:
      "Happy birthday to my extraordinary Uncle! Your adventurous nature inspires me to dream big. Wishing you a year full of joy and exciting adventures! 🎂💖"
  },
  {
    id: 66,
    content:
      "To my caring Uncle, happy birthday! Your support has been a constant in my life. May your special day be surrounded by love and happiness! 🎉❤️"
  },
  {
    id: 67,
    content:
      "Happy birthday, Uncle! Your humor and spirit make every moment special. May your day be filled with cherished memories and joy! 🎈💙"
  },
  {
    id: 68,
    content:
      "To my incredible Uncle, happy birthday! Your love and kindness are a gift I cherish. May your day be filled with everything you adore! 🌟💖"
  },
  {
    id: 69,
    content:
      "Happy birthday to my beloved Uncle! Your strength and guidance have shaped my life. Wishing you a fantastic day and a wonderful year ahead! 🎂❤️"
  },
  {
    id: 70,
    content:
      "To my amazing Uncle, happy birthday! Your adventurous spirit inspires us all. May this year bring you joy and exciting journeys! 🎉💙"
  },
  {
    id: 71,
    content:
      "Happy birthday, Uncle! Your kindness and laughter light up our lives. May your special day be filled with love and happiness! 🎈💖"
  },
  {
    id: 72,
    content:
      "To my wonderful Uncle, happy birthday! Your wisdom and support are invaluable gifts. May your year be filled with joy and love! 🌟❤️"
  },
  {
    id: 73,
    content:
      "Happy birthday to my extraordinary Uncle! Your adventurous nature makes every day exciting. Wishing you a year full of beautiful memories! 🎂💙"
  },
  {
    id: 74,
    content:
      "To my caring Uncle, happy birthday! Your guidance has helped me grow into who I am today. May your special day be filled with love and joy! 🎉💖"
  },
  {
    id: 75,
    content:
      "Happy birthday, Uncle! Your laughter and joy are infectious. May your day be filled with cherished moments and happiness! 🎈❤️"
  },
  {
    id: 76,
    content:
      "To my incredible Uncle, happy birthday! Your love and kindness are gifts I treasure. May your day be filled with everything that brings you joy! 🌟💙"
  },
  {
    id: 77,
    content:
      "Happy birthday to my beloved Uncle! Your strength and wisdom inspire me. Wishing you a fantastic day and a wonderful year ahead! 🎂💖"
  },
  {
    id: 78,
    content:
      "To my amazing Uncle, happy birthday! Your adventurous spirit brings excitement to our lives. May this year be filled with beautiful memories! 🎉❤️"
  },
  {
    id: 79,
    content:
      "Happy birthday, Uncle! Your kindness and laughter fill our hearts with joy. May your special day be surrounded by love and happiness! 🎈💙"
  },
  {
    id: 80,
    content:
      "To my wonderful Uncle, happy birthday! Your wisdom and love guide me every day. May your year be filled with joy and fulfillment! 🌟💖"
  },
  {
    id: 81,
    content:
      "Happy birthday to my extraordinary Uncle! Your adventurous nature inspires me to explore. Wishing you a year filled with thrilling experiences! 🎂❤️"
  },
  {
    id: 82,
    content:
      "To my caring Uncle, happy birthday! Your support has helped me grow. May your special day be filled with love and cherished moments! 🎉💙"
  },
  {
    id: 83,
    content:
      "Happy birthday, Uncle! Your spirit and humor make every gathering special. May your day be filled with happiness and laughter! 🎈💖"
  },
  {
    id: 84,
    content:
      "To my incredible Uncle, happy birthday! Your love and wisdom are invaluable gifts. May your day be filled with everything that brings you joy! 🌟❤️"
  },
  {
    id: 85,
    content:
      "Happy birthday to my beloved Uncle! Your kindness and strength inspire me every day. Wishing you a fantastic year ahead! 🎂💙"
  },
  {
    id: 86,
    content:
      "To my amazing Uncle, happy birthday! Your adventurous spirit brings excitement to our lives. May this year be filled with beautiful memories! 🎉💖"
  },
  {
    id: 87,
    content:
      "Happy birthday, Uncle! Your kindness and laughter fill our hearts with joy. May your special day be surrounded by love and happiness! 🎈❤️"
  },
  {
    id: 88,
    content:
      "To my wonderful Uncle, happy birthday! Your wisdom and love guide me every day. May your year be filled with joy and fulfillment! 🌟💙"
  },
  {
    id: 89,
    content:
      "Happy birthday to my extraordinary Uncle! Your adventurous nature inspires me to dream big. Wishing you a year full of joy and exciting adventures! 🎂💖"
  },
  {
    id: 90,
    content:
      "To my caring Uncle, happy birthday! Your support has been a constant in my life. May your special day be surrounded by love and happiness! 🎉❤️"
  },
  {
    id: 91,
    content:
      "Happy birthday, Uncle! Your humor and spirit make every moment special. May your day be filled with cherished memories and joy! 🎈💙"
  },
  {
    id: 92,
    content:
      "To my incredible Uncle, happy birthday! Your love and kindness are a gift I cherish. May your day be filled with everything you adore! 🌟💖"
  },
  {
    id: 93,
    content:
      "Happy birthday to my beloved Uncle! Your strength and guidance have shaped my life. Wishing you a fantastic day and a wonderful year ahead! 🎂❤️"
  },
  {
    id: 94,
    content:
      "To my amazing Uncle, happy birthday! Your adventurous spirit inspires us all. May this year bring you joy and exciting journeys! 🎉💙"
  },
  {
    id: 95,
    content:
      "Happy birthday, Uncle! Your kindness and laughter light up our lives. May your special day be filled with love and happiness! 🎈💖"
  },
  {
    id: 96,
    content:
      "To my wonderful Uncle, happy birthday! Your wisdom and support are invaluable gifts. May your year be filled with joy and love! 🌟❤️"
  },
  {
    id: 97,
    content:
      "Happy birthday to my extraordinary Uncle! Your adventurous nature makes every day exciting. Wishing you a year full of beautiful memories! 🎂💙"
  },
  {
    id: 98,
    content:
      "To my caring Uncle, happy birthday! Your guidance has helped me grow into who I am today. May your special day be filled with love and joy! 🎉💖"
  },
  {
    id: 99,
    content:
      "Happy birthday, Uncle! Your laughter and joy are infectious. May your day be filled with cherished moments and happiness! 🎈❤️"
  },
  {
    id: 100,
    content:
      "To my incredible Uncle, happy birthday! Your love and kindness are gifts I treasure. May your day be filled with everything that brings you joy! 🌟💙"
  }
];

const niece = [
  {
    id: 1,
    content:
      "Happy birthday, dear niece! You are a shining star in our lives, and I hope this year brings you all the joy and happiness you deserve! 🎉💖"
  },
  {
    id: 2,
    content:
      "To my wonderful niece, happy birthday! Your laughter and spirit light up our family. May your special day be filled with love and fun! 🎈❤️"
  },
  {
    id: 3,
    content:
      "Happy birthday to my amazing niece! You inspire us all with your creativity and kindness. May this year bring you endless possibilities! 🎂💙"
  },
  {
    id: 4,
    content:
      "To my sweet niece, happy birthday! Your adventurous heart makes life more exciting. Wishing you a day full of surprises and love! 🌟💖"
  },
  {
    id: 5,
    content:
      "Happy birthday, niece! Your smile brightens every room. May your special day be filled with laughter and wonderful memories! 🎉❤️"
  },
  {
    id: 6,
    content:
      "To my lovely niece, happy birthday! Your kindness and warmth make the world a better place. May this year be as beautiful as you are! 🎈💙"
  },
  {
    id: 7,
    content:
      "Happy birthday to my precious niece! Your spirit and enthusiasm are contagious. May your day be filled with joy and your dreams come true! 🎂💖"
  },
  {
    id: 8,
    content:
      "To my incredible niece, happy birthday! Your creativity and passion inspire us all. Wishing you a year filled with exciting adventures! 🌟❤️"
  },
  {
    id: 9,
    content:
      "Happy birthday, niece! Your laughter and joy bring so much happiness to our lives. May your day be as special as you are! 🎉💙"
  },
  {
    id: 10,
    content:
      "To my dear niece, happy birthday! Your adventurous spirit makes every moment brighter. May this year be filled with love and wonderful experiences! 🎈💖"
  },
  {
    id: 11,
    content:
      "Happy birthday to my fabulous niece! Your enthusiasm for life is infectious. Wishing you a day filled with everything you love! 🎂❤️"
  },
  {
    id: 12,
    content:
      "To my sweet niece, happy birthday! Your creativity and joy are gifts I treasure. May your special day be surrounded by happiness! 🌟💙"
  },
  {
    id: 13,
    content:
      "Happy birthday, niece! Your energy and spirit light up our family gatherings. May this year bring you endless joy and beautiful memories! 🎉💖"
  },
  {
    id: 14,
    content:
      "To my amazing niece, happy birthday! Your kindness and laughter fill our hearts with warmth. May your day be as wonderful as you are! 🎈❤️"
  },
  {
    id: 15,
    content:
      "Happy birthday to my beloved niece! Your spirit and determination inspire everyone around you. Wishing you a fantastic year ahead! 🎂💙"
  },
  {
    id: 16,
    content:
      "To my lovely niece, happy birthday! Your adventurous heart and cheerful nature make life more exciting. May your special day be filled with joy! 🌟💖"
  },
  {
    id: 17,
    content:
      "Happy birthday, niece! Your creativity and enthusiasm are truly inspiring. Wishing you a year filled with happiness and adventure! 🎉❤️"
  },
  {
    id: 18,
    content:
      "To my wonderful niece, happy birthday! Your laughter and joy bring so much light to our lives. May your day be surrounded by love and happiness! 🎈💙"
  },
  {
    id: 19,
    content:
      "Happy birthday to my fabulous niece! Your kindness and spirit make the world a better place. May this year be filled with amazing opportunities! 🎂💖"
  },
  {
    id: 20,
    content:
      "To my incredible niece, happy birthday! Your adventurous nature and fun-loving heart light up our family. Wishing you a year full of joy and laughter! 🌟❤️"
  },
  {
    id: 21,
    content:
      "Happy birthday, niece! Your smile and energy bring so much joy to our lives. May your special day be filled with everything that makes you happy! 🎉💙"
  },
  {
    id: 22,
    content:
      "To my sweet niece, happy birthday! Your creativity and passion inspire us all. May your day be filled with love and cherished moments! 🎈💖"
  },
  {
    id: 23,
    content:
      "Happy birthday to my beloved niece! Your laughter and joy are gifts I treasure. Wishing you a fantastic day and an amazing year ahead! 🎂❤️"
  },
  {
    id: 24,
    content:
      "To my wonderful niece, happy birthday! Your adventurous spirit makes every moment special. May your day be filled with love and happiness! 🌟💙"
  },
  {
    id: 25,
    content:
      "Happy birthday, niece! Your kindness and support mean everything to me. May this year bring you all the joy you bring to others! 🎉💖"
  },
  {
    id: 26,
    content:
      "To my incredible niece, happy birthday! Your creativity and warmth make life so much better. Wishing you a year filled with joy and unforgettable memories! 🎈❤️"
  },
  {
    id: 27,
    content:
      "Happy birthday to my amazing niece! Your laughter and spirit light up our family gatherings. May your day be surrounded by love and joy! 🎂💙"
  },
  {
    id: 28,
    content:
      "To my sweet niece, happy birthday! Your adventurous heart and cheerful nature inspire us all. May your special day be as bright and beautiful as you are! 🌟💖"
  },
  {
    id: 29,
    content:
      "Happy birthday, niece! Your kindness and energy fill our lives with happiness. Wishing you a year full of love and adventure! 🎉❤️"
  },
  {
    id: 30,
    content:
      "To my fabulous niece, happy birthday! Your spirit and enthusiasm make every moment brighter. May your day be filled with all your favorite things! 🎂💙"
  },
  {
    id: 31,
    content:
      "Happy birthday to my dear niece! Your creativity and joy bring so much light into our lives. May your special day be surrounded by love and laughter! 🌟💖"
  },
  {
    id: 32,
    content:
      "To my amazing niece, happy birthday! Your adventurous nature and kind heart make life so much more fun. Wishing you a year filled with happiness and unforgettable experiences! 🎈❤️"
  },
  {
    id: 33,
    content:
      "Happy birthday, niece! Your laughter and joy are gifts that brighten our days. May your special day be filled with everything you love! 🎉💙"
  },
  {
    id: 34,
    content:
      "To my wonderful niece, happy birthday! Your spirit and kindness inspire everyone around you. May this year be filled with joy and beautiful memories! 🎂💖"
  },
  {
    id: 35,
    content:
      "Happy birthday to my beloved niece! Your adventurous heart and positive spirit light up our lives. Wishing you a year filled with love and joy! 🌟❤️"
  },
  {
    id: 36,
    content:
      "To my sweet niece, happy birthday! Your creativity and laughter bring so much joy to our family. May your special day be surrounded by happiness and love! 🎈💙"
  },
  {
    id: 37,
    content:
      "Happy birthday, niece! Your energy and enthusiasm make our family gatherings brighter. Wishing you a year filled with amazing adventures and happiness! 🎉💖"
  },
  {
    id: 38,
    content:
      "To my incredible niece, happy birthday! Your warmth and kindness make life better. May your day be filled with everything that brings you joy! 🎂❤️"
  },
  {
    id: 39,
    content:
      "Happy birthday to my fabulous niece! Your adventurous spirit and fun-loving nature bring joy to our family. Wishing you a year filled with happiness and wonderful experiences! 🌟💙"
  },
  {
    id: 40,
    content:
      "To my amazing niece, happy birthday! Your creativity and passion inspire us all. May your special day be as bright and beautiful as you are! 🎈💖"
  },
  {
    id: 41,
    content:
      "Happy birthday, niece! Your adventurous heart makes every moment special. Wishing you a year filled with love, joy, and beautiful experiences! 🎉❤️"
  },
  {
    id: 42,
    content:
      "To my lovely niece, happy birthday! Your laughter and joy bring happiness to our lives. May your day be surrounded by love and cherished moments! 🎂💙"
  },
  {
    id: 43,
    content:
      "Happy birthday to my dear niece! Your spirit and kindness light up our family. Wishing you a fantastic year filled with love and joy! 🌟💖"
  },
  {
    id: 44,
    content:
      "To my incredible niece, happy birthday! Your adventurous nature and cheerful heart make life more exciting. May your special day be filled with love! 🎈❤️"
  },
  {
    id: 45,
    content:
      "Happy birthday, niece! Your creativity and warmth touch everyone around you. Wishing you a year filled with joy and unforgettable memories! 🎉💙"
  },
  {
    id: 46,
    content:
      "To my sweet niece, happy birthday! Your laughter and kindness are treasures I cherish. May your day be as special as you are! 🎂💖"
  },
  {
    id: 47,
    content:
      "Happy birthday to my amazing niece! Your spirit and enthusiasm bring so much joy to our family. Wishing you a year filled with happiness and love! 🌟❤️"
  },
  {
    id: 48,
    content:
      "To my lovely niece, happy birthday! Your adventurous heart and creative mind inspire us all. May your special day be surrounded by happiness! 🎈💙"
  },
  {
    id: 49,
    content:
      "Happy birthday, niece! Your energy and kindness light up our lives. Wishing you a fantastic year filled with love and wonderful adventures! 🎉💖"
  },
  {
    id: 50,
    content:
      "To my beloved niece, happy birthday! Your creativity and spirit make the world a brighter place. May your day be filled with everything that brings you joy! 🎂❤️"
  },
  {
    id: 51,
    content:
      "Happy birthday to my fabulous niece! Your laughter and joy are gifts I treasure. Wishing you a year filled with amazing experiences and love! 🌟💙"
  },
  {
    id: 52,
    content:
      "To my incredible niece, happy birthday! Your adventurous spirit and warm heart make life so much more fun. May your special day be filled with joy and happiness! 🎈💖"
  },
  {
    id: 53,
    content:
      "Happy birthday, niece! Your creativity and enthusiasm inspire everyone around you. Wishing you a year filled with love and unforgettable moments! 🎉❤️"
  },
  {
    id: 54,
    content:
      "To my sweet niece, happy birthday! Your laughter and joy bring so much happiness to our lives. May your day be surrounded by love and cherished memories! 🎂💙"
  },
  {
    id: 55,
    content:
      "Happy birthday to my wonderful niece! Your spirit and kindness light up our family. Wishing you a fantastic year ahead filled with love and joy! 🌟💖"
  },
  {
    id: 56,
    content:
      "To my amazing niece, happy birthday! Your adventurous nature and cheerful heart make life more exciting. May your special day be as bright as you are! 🎈❤️"
  },
  {
    id: 57,
    content:
      "Happy birthday, niece! Your energy and laughter fill our lives with joy. Wishing you a year full of love, happiness, and beautiful experiences! 🎉💙"
  },
  {
    id: 58,
    content:
      "To my beloved niece, happy birthday! Your creativity and warmth make life better. May your day be filled with everything that brings you happiness! 🎂💖"
  },
  {
    id: 59,
    content:
      "Happy birthday to my fabulous niece! Your adventurous spirit and fun-loving heart light up our family gatherings. Wishing you a year filled with joy! 🌟❤️"
  },
  {
    id: 60,
    content:
      "To my incredible niece, happy birthday! Your laughter and joy are treasures I hold dear. May your special day be surrounded by love and happiness! 🎈💙"
  },
  {
    id: 61,
    content:
      "Happy birthday, niece! Your creativity and enthusiasm inspire us all. Wishing you a year filled with amazing adventures and joy! 🎉💖"
  },
  {
    id: 62,
    content:
      "To my sweet niece, happy birthday! Your kind heart and adventurous spirit make every moment special. May your day be filled with love and joy! 🎂❤️"
  },
  {
    id: 63,
    content:
      "Happy birthday to my wonderful niece! Your energy and kindness light up our lives. Wishing you a year full of love, joy, and cherished moments! 🌟💙"
  },
  {
    id: 64,
    content:
      "To my amazing niece, happy birthday! Your spirit and enthusiasm make life so much better. May your special day be filled with everything you love! 🎈💖"
  },
  {
    id: 65,
    content:
      "Happy birthday, niece! Your laughter and joy bring happiness to our family. Wishing you a year filled with exciting adventures and love! 🎉❤️"
  },
  {
    id: 66,
    content:
      "To my beloved niece, happy birthday! Your adventurous heart and creative mind inspire us all. May your day be filled with joy and wonderful experiences! 🎂💙"
  },
  {
    id: 67,
    content:
      "Happy birthday to my fabulous niece! Your kindness and spirit make every moment brighter. Wishing you a year filled with love and happiness! 🌟💖"
  },
  {
    id: 68,
    content:
      "To my sweet niece, happy birthday! Your creativity and joy are gifts I treasure. May your special day be surrounded by love and laughter! 🎈❤️"
  },
  {
    id: 69,
    content:
      "Happy birthday, niece! Your adventurous spirit and cheerful heart make life so much more fun. Wishing you a year filled with joy and unforgettable moments! 🎉💙"
  },
  {
    id: 70,
    content:
      "To my wonderful niece, happy birthday! Your energy and laughter fill our lives with joy. May your special day be as bright and beautiful as you are! 🎂💖"
  },
  {
    id: 71,
    content:
      "Happy birthday to my incredible niece! Your creativity and warmth touch everyone around you. Wishing you a year filled with happiness and love! 🌟❤️"
  },
  {
    id: 72,
    content:
      "To my lovely niece, happy birthday! Your spirit and kindness light up our family gatherings. May your day be filled with everything that brings you joy! 🎈💙"
  },
  {
    id: 73,
    content:
      "Happy birthday, niece! Your laughter and joy are treasures I cherish. Wishing you a year filled with amazing experiences and love! 🎉💖"
  },
  {
    id: 74,
    content:
      "To my amazing niece, happy birthday! Your adventurous nature and fun-loving heart bring so much joy to our lives. May your special day be filled with love! 🎂❤️"
  },
  {
    id: 75,
    content:
      "Happy birthday to my sweet niece! Your energy and kindness make the world a better place. Wishing you a year filled with joy and unforgettable memories! 🌟💙"
  },
  {
    id: 76,
    content:
      "To my beloved niece, happy birthday! Your spirit and enthusiasm inspire everyone around you. May your day be surrounded by love and happiness! 🎈💖"
  },
  {
    id: 77,
    content:
      "Happy birthday, niece! Your creativity and joy bring so much light into our lives. Wishing you a fantastic year ahead filled with love and adventure! 🎉❤️"
  },
  {
    id: 78,
    content:
      "To my wonderful niece, happy birthday! Your adventurous heart makes life so much more exciting. May your special day be filled with joy and beautiful moments! 🎂💙"
  },
  {
    id: 79,
    content:
      "Happy birthday to my fabulous niece! Your kindness and laughter light up our family. Wishing you a year filled with everything that makes you happy! 🌟💖"
  },
  {
    id: 80,
    content:
      "To my sweet niece, happy birthday! Your energy and creativity inspire us all. May your day be filled with love and cherished memories! 🎈❤️"
  },
  {
    id: 81,
    content:
      "Happy birthday, niece! Your adventurous spirit and cheerful heart bring so much joy to our lives. Wishing you a year filled with happiness and wonderful experiences! 🎉💙"
  },
  {
    id: 82,
    content:
      "To my amazing niece, happy birthday! Your laughter and joy fill our hearts with warmth. May your special day be surrounded by love and laughter! 🎂💖"
  },
  {
    id: 83,
    content:
      "Happy birthday to my beloved niece! Your creativity and spirit make life more beautiful. Wishing you a fantastic year ahead filled with joy! 🌟❤️"
  },
  {
    id: 84,
    content:
      "To my lovely niece, happy birthday! Your kindness and adventurous heart light up our family gatherings. May your day be filled with everything you love! 🎈💙"
  },
  {
    id: 85,
    content:
      "Happy birthday, niece! Your energy and enthusiasm bring so much joy to our family. Wishing you a year filled with amazing adventures and love! 🎉💖"
  },
  {
    id: 86,
    content:
      "To my wonderful niece, happy birthday! Your spirit and creativity inspire everyone around you. May your special day be as bright and beautiful as you are! 🎂❤️"
  },
  {
    id: 87,
    content:
      "Happy birthday to my fabulous niece! Your adventurous nature and warm heart make life more exciting. Wishing you a year filled with joy and wonderful experiences! 🌟💙"
  },
  {
    id: 88,
    content:
      "To my incredible niece, happy birthday! Your laughter and joy are treasures I hold dear. May your day be filled with love and cherished moments! 🎈💖"
  },
  {
    id: 89,
    content:
      "Happy birthday, niece! Your creativity and spirit make the world a brighter place. Wishing you a fantastic year ahead filled with love and happiness! 🎉❤️"
  },
  {
    id: 90,
    content:
      "To my sweet niece, happy birthday! Your adventurous heart and kind soul inspire us all. May your special day be filled with joy and beautiful memories! 🎂💙"
  },
  {
    id: 91,
    content:
      "Happy birthday to my beloved niece! Your laughter and warmth fill our hearts with happiness. Wishing you a year filled with everything you love! 🌟💖"
  },
  {
    id: 92,
    content:
      "To my amazing niece, happy birthday! Your spirit and enthusiasm light up our family. May your day be filled with joy and wonderful adventures! 🎈❤️"
  },
  {
    id: 93,
    content:
      "Happy birthday, niece! Your energy and kindness bring so much joy to our lives. Wishing you a year filled with love, happiness, and amazing experiences! 🎉💙"
  },
  {
    id: 94,
    content:
      "To my wonderful niece, happy birthday! Your adventurous spirit and cheerful heart make life so much better. May your special day be surrounded by love and laughter! 🎂💖"
  },
  {
    id: 95,
    content:
      "Happy birthday to my fabulous niece! Your creativity and joy are gifts I treasure. Wishing you a fantastic year ahead filled with happiness and love! 🌟❤️"
  },
  {
    id: 96,
    content:
      "To my sweet niece, happy birthday! Your laughter and adventurous heart light up our lives. May your day be filled with everything that brings you joy! 🎈💙"
  },
  {
    id: 97,
    content:
      "Happy birthday, niece! Your spirit and kindness make every moment special. Wishing you a year filled with love and beautiful experiences! 🎉💖"
  },
  {
    id: 98,
    content:
      "To my incredible niece, happy birthday! Your creativity and energy inspire everyone around you. May your special day be as bright and beautiful as you are! 🎂❤️"
  },
  {
    id: 99,
    content:
      "Happy birthday to my lovely niece! Your adventurous spirit and warm heart make life more exciting. Wishing you a year filled with joy and happiness! 🌟💙"
  },
  {
    id: 100,
    content:
      "To my beloved niece, happy birthday! Your laughter and joy bring so much light into our lives. May your day be surrounded by love and cherished moments! 🎈💖"
  },
  {
    id: 101,
    content:
      "Happy birthday, niece! Your creativity and adventurous heart inspire us all. Wishing you a year filled with love, joy, and wonderful experiences! 🎉❤️"
  },
  {
    id: 102,
    content:
      "To my amazing niece, happy birthday! Your spirit and kindness brighten our family gatherings. May your special day be filled with everything you love! 🎂💙"
  },
  {
    id: 103,
    content:
      "Happy birthday to my wonderful niece! Your laughter and joy fill our hearts with warmth. Wishing you a fantastic year ahead filled with love and happiness! 🌟💖"
  },
  {
    id: 104,
    content:
      "To my fabulous niece, happy birthday! Your energy and enthusiasm make life so much more fun. May your day be surrounded by joy and cherished memories! 🎈❤️"
  },
  {
    id: 105,
    content:
      "Happy birthday, niece! Your adventurous spirit and creative mind inspire us all. Wishing you a year filled with joy, love, and beautiful experiences! 🎉💙"
  },
  {
    id: 106,
    content:
      "To my lovely niece, happy birthday! Your kindness and laughter light up our family. May your special day be as bright and beautiful as you are! 🎂💖"
  },
  {
    id: 107,
    content:
      "Happy birthday to my beloved niece! Your spirit and creativity touch everyone around you. Wishing you a year filled with happiness and wonderful adventures! 🌟❤️"
  },
  {
    id: 108,
    content:
      "To my sweet niece, happy birthday! Your energy and warmth bring so much joy to our lives. May your day be filled with love and cherished memories! 🎈💙"
  },
  {
    id: 109,
    content:
      "Happy birthday, niece! Your laughter and joy fill our hearts with happiness. Wishing you a fantastic year ahead filled with love and adventure! 🎉💖"
  },
  {
    id: 110,
    content:
      "To my wonderful niece, happy birthday! Your adventurous heart and creative mind inspire everyone around you. May your special day be filled with everything that makes you happy! 🎂❤️"
  },
  {
    id: 111,
    content:
      "Happy birthday to my fabulous niece! Your spirit and enthusiasm make life more exciting. Wishing you a year filled with love and unforgettable moments! 🌟💙"
  },
  {
    id: 112,
    content:
      "To my incredible niece, happy birthday! Your kindness and joy light up our lives. May your special day be surrounded by happiness and love! 🎈💖"
  },
  {
    id: 113,
    content:
      "Happy birthday, niece! Your adventurous nature and cheerful heart bring so much joy to our family. Wishing you a year filled with beautiful experiences and love! 🎉❤️"
  },
  {
    id: 114,
    content:
      "To my amazing niece, happy birthday! Your creativity and warmth inspire everyone around you. May your day be filled with everything you love! 🎂💙"
  },
  {
    id: 115,
    content:
      "Happy birthday to my beloved niece! Your laughter and joy fill our hearts with warmth. Wishing you a year filled with happiness and unforgettable moments! 🌟💖"
  },
  {
    id: 116,
    content:
      "To my lovely niece, happy birthday! Your energy and spirit light up our family gatherings. May your special day be surrounded by love and laughter! 🎈❤️"
  },
  {
    id: 117,
    content:
      "Happy birthday, niece! Your creativity and adventurous heart bring so much joy to our lives. Wishing you a fantastic year ahead filled with love and happiness! 🎉💙"
  },
  {
    id: 118,
    content:
      "To my wonderful niece, happy birthday! Your kindness and spirit make every moment brighter. May your day be filled with joy and cherished memories! 🎂💖"
  }
];

const nephew = [
  {
    id: 1,
    content:
      "Happy birthday to my amazing nephew! Your energy and laughter light up our lives. May this year bring you endless adventures and joy! 🎉💙"
  },
  {
    id: 2,
    content:
      "To my wonderful nephew, happy birthday! Your adventurous spirit and kind heart inspire us all. Wishing you a fantastic year ahead filled with love and happiness! 🎂❤️"
  },
  {
    id: 3,
    content:
      "Happy birthday, nephew! Your creativity and enthusiasm make life so much fun. May your special day be filled with everything you love! 🌟💖"
  },
  {
    id: 4,
    content:
      "To my incredible nephew, happy birthday! Your laughter and joy brighten our family gatherings. May this year bring you exciting opportunities and cherished memories! 🎈💙"
  },
  {
    id: 5,
    content:
      "Happy birthday to my fabulous nephew! Your adventurous heart and playful spirit fill our lives with joy. Wishing you a year filled with amazing experiences! 🎉❤️"
  },
  {
    id: 6,
    content:
      "To my beloved nephew, happy birthday! Your kindness and energy inspire everyone around you. May your day be as special as you are! 🎂💖"
  },
  {
    id: 7,
    content:
      "Happy birthday, nephew! Your creativity and adventurous nature bring so much joy to our lives. Wishing you a fantastic year ahead filled with love and laughter! 🌟💙"
  },
  {
    id: 8,
    content:
      "To my sweet nephew, happy birthday! Your laughter and spirit light up our family. May your special day be filled with happiness and wonderful moments! 🎈❤️"
  },
  {
    id: 9,
    content:
      "Happy birthday to my wonderful nephew! Your adventurous heart and cheerful nature make every moment special. Wishing you a year filled with joy and love! 🎉💖"
  },
  {
    id: 10,
    content:
      "To my amazing nephew, happy birthday! Your kindness and creativity inspire everyone around you. May your day be filled with everything you love! 🎂💙"
  },
  {
    id: 11,
    content:
      "Happy birthday, nephew! Your spirit and enthusiasm make life so much more exciting. Wishing you a year filled with love and unforgettable experiences! 🌟❤️"
  },
  {
    id: 12,
    content:
      "To my incredible nephew, happy birthday! Your laughter and joy bring happiness to our family. May your special day be surrounded by love and cherished moments! 🎈💖"
  },
  {
    id: 13,
    content:
      "Happy birthday, nephew! Your adventurous nature and creative spirit inspire us all. Wishing you a year filled with beautiful experiences and love! 🎉💙"
  },
  {
    id: 14,
    content:
      "To my beloved nephew, happy birthday! Your energy and laughter fill our hearts with joy. May this year bring you amazing adventures and happiness! 🎂❤️"
  },
  {
    id: 15,
    content:
      "Happy birthday to my fabulous nephew! Your adventurous spirit and kind heart are gifts we treasure. Wishing you a fantastic year ahead! 🌟💖"
  },
  {
    id: 16,
    content:
      "To my sweet nephew, happy birthday! Your creativity and joyful nature make every moment special. May your day be filled with love and laughter! 🎈💙"
  },
  {
    id: 17,
    content:
      "Happy birthday, nephew! Your spirit and kindness brighten our family gatherings. Wishing you a year filled with joy and amazing experiences! 🎉❤️"
  },
  {
    id: 18,
    content:
      "To my wonderful nephew, happy birthday! Your laughter and adventurous heart inspire everyone around you. May your special day be as bright as you are! 🎂💖"
  },
  {
    id: 19,
    content:
      "Happy birthday to my incredible nephew! Your energy and creativity bring so much joy to our lives. Wishing you a year filled with everything you love! 🌟💙"
  },
  {
    id: 20,
    content:
      "To my amazing nephew, happy birthday! Your adventurous spirit and joyful heart light up our family. May your day be filled with wonderful moments! 🎈❤️"
  },
  {
    id: 21,
    content:
      "Happy birthday, dear nephew! Your smile brightens our days, and your laughter fills our hearts with joy. May your year ahead be as wonderful as you are! 🎉💙"
  },
  {
    id: 22,
    content:
      "To my beloved nephew, happy birthday! Your unique spirit and boundless energy inspire everyone around you. Wishing you endless happiness today and always! 🎂❤️"
  },
  {
    id: 23,
    content:
      "Happy birthday, nephew! Your kind heart and adventurous nature are gifts to everyone who knows you. May this year be filled with love and laughter! 🌟💖"
  },
  {
    id: 24,
    content:
      "To my incredible nephew, happy birthday! Your zest for life is contagious, and your laughter brings us all joy. Wishing you a year full of exciting adventures! 🎈💙"
  },
  {
    id: 25,
    content:
      "Happy birthday to my fabulous nephew! Your creativity and spirit make every day special. May your birthday be filled with dreams coming true! 🎉❤️"
  },
  {
    id: 26,
    content:
      "To my sweet nephew, happy birthday! Your joy and energy bring light to our family. Wishing you a year filled with cherished moments and happiness! 🎂💖"
  },
  {
    id: 27,
    content:
      "Happy birthday, nephew! Your adventurous spirit and kind heart are treasures we hold dear. May this year bring you amazing opportunities and joy! 🌟💙"
  },
  {
    id: 28,
    content:
      "To my wonderful nephew, happy birthday! Your laughter and enthusiasm brighten our days. May your special day be filled with love and wonderful surprises! 🎈❤️"
  },
  {
    id: 29,
    content:
      "Happy birthday to my incredible nephew! Your energy and creativity inspire us all. Wishing you a year full of happiness and love! 🎉💖"
  },
  {
    id: 30,
    content:
      "To my amazing nephew, happy birthday! Your spirit and joy make every moment special. May your day be surrounded by love and cherished memories! 🎂💙"
  },
  {
    id: 31,
    content:
      "Happy birthday, dear nephew! Your kindness and adventurous nature make life so much richer. Wishing you a year filled with beautiful experiences and laughter! 🌟❤️"
  },
  {
    id: 32,
    content:
      "To my beloved nephew, happy birthday! Your smile brings joy to everyone around you. May your special day be filled with happiness and love! 🎈💖"
  },
  {
    id: 33,
    content:
      "Happy birthday, nephew! Your creativity and spirit make the world a brighter place. Wishing you a fantastic year ahead filled with everything you love! 🎉💙"
  },
  {
    id: 34,
    content:
      "To my incredible nephew, happy birthday! Your laughter and joy are gifts we cherish. May this year bring you exciting adventures and unforgettable moments! 🎂❤️"
  },
  {
    id: 35,
    content:
      "Happy birthday to my fabulous nephew! Your adventurous heart and cheerful nature inspire us all. Wishing you a year filled with happiness and love! 🌟💖"
  },
  {
    id: 36,
    content:
      "To my sweet nephew, happy birthday! Your creativity and joyful spirit bring so much happiness to our family. May your day be filled with everything you adore! 🎈💙"
  },
  {
    id: 37,
    content:
      "Happy birthday, nephew! Your spirit and kindness make our family gatherings so special. Wishing you a year full of joy and wonderful memories! 🎉❤️"
  },
  {
    id: 38,
    content:
      "To my wonderful nephew, happy birthday! Your laughter and energy fill our lives with joy. May your special day be surrounded by love and happiness! 🎂💖"
  },
  {
    id: 39,
    content:
      "Happy birthday to my incredible nephew! Your creativity and adventurous nature make life so much fun. Wishing you a year filled with love and amazing experiences! 🌟💙"
  },
  {
    id: 40,
    content:
      "To my amazing nephew, happy birthday! Your adventurous spirit and joyful heart light up our family. May your day be as special as you are! 🎈❤️"
  },
  {
    id: 41,
    content:
      "Happy birthday, dear nephew! Your energy and laughter bring us all joy. May this year be filled with adventures and cherished moments! 🎉💖"
  },
  {
    id: 42,
    content:
      "To my beloved nephew, happy birthday! Your unique spirit and kind heart inspire everyone around you. Wishing you a fantastic year ahead! 🎂💙"
  },
  {
    id: 43,
    content:
      "Happy birthday, nephew! Your adventurous heart and cheerful nature make every moment memorable. May your special day be filled with love and joy! 🌟❤️"
  },
  {
    id: 44,
    content:
      "To my incredible nephew, happy birthday! Your laughter and energy light up our lives. Wishing you a year full of happiness and unforgettable experiences! 🎈💖"
  },
  {
    id: 45,
    content:
      "Happy birthday to my fabulous nephew! Your creativity and joyful spirit make every day special. May your birthday be filled with love and cherished moments! 🎉💙"
  },
  {
    id: 46,
    content:
      "To my sweet nephew, happy birthday! Your kindness and adventurous nature are treasures we hold dear. May this year bring you amazing adventures! 🎂❤️"
  },
  {
    id: 47,
    content:
      "Happy birthday, nephew! Your energy and creativity inspire us all. Wishing you a year filled with joy and love! 🌟💖"
  },
  {
    id: 48,
    content:
      "To my wonderful nephew, happy birthday! Your laughter and enthusiasm brighten our family gatherings. May your special day be surrounded by happiness and love! 🎈💙"
  },
  {
    id: 49,
    content:
      "Happy birthday to my incredible nephew! Your adventurous spirit and kind heart make life so much richer. Wishing you a fantastic year ahead filled with everything you adore! 🎉❤️"
  },
  {
    id: 50,
    content:
      "To my amazing nephew, happy birthday! Your spirit and joy make every moment special. May your day be filled with love and wonderful memories! 🎂💖"
  },
  {
    id: 51,
    content:
      "Happy birthday, dear nephew! Your smile brightens our days, and your laughter fills our hearts with joy. May your year ahead be as wonderful as you are! 🎉💙"
  },
  {
    id: 52,
    content:
      "To my beloved nephew, happy birthday! Your unique spirit and boundless energy inspire everyone around you. Wishing you endless happiness today and always! 🎂❤️"
  },
  {
    id: 53,
    content:
      "Happy birthday, nephew! Your kind heart and adventurous nature are gifts to everyone who knows you. May this year be filled with love and laughter! 🌟💖"
  },
  {
    id: 54,
    content:
      "To my incredible nephew, happy birthday! Your zest for life is contagious, and your laughter brings us all joy. Wishing you a year full of exciting adventures! 🎈💙"
  },
  {
    id: 55,
    content:
      "Happy birthday to my fabulous nephew! Your creativity and spirit make every day special. May your birthday be filled with dreams coming true! 🎉❤️"
  },
  {
    id: 56,
    content:
      "To my sweet nephew, happy birthday! Your joy and energy bring light to our family. Wishing you a year filled with cherished moments and happiness! 🎂💖"
  },
  {
    id: 57,
    content:
      "Happy birthday, nephew! Your adventurous nature and creative spirit inspire us all. Wishing you a year filled with beautiful experiences and love! 🎉💙"
  },
  {
    id: 58,
    content:
      "To my beloved nephew, happy birthday! Your energy and laughter fill our hearts with joy. May this year bring you amazing adventures and happiness! 🎂❤️"
  },
  {
    id: 59,
    content:
      "Happy birthday to my fabulous nephew! Your adventurous spirit and kind heart are gifts we treasure. Wishing you a fantastic year ahead! 🌟💖"
  },
  {
    id: 60,
    content:
      "To my sweet nephew, happy birthday! Your creativity and joyful nature make every moment special. May your day be filled with love and laughter! 🎈💙"
  },
  {
    id: 61,
    content:
      "Happy birthday, nephew! Your spirit and kindness brighten our family gatherings. Wishing you a year filled with joy and amazing experiences! 🎉❤️"
  },
  {
    id: 62,
    content:
      "To my wonderful nephew, happy birthday! Your laughter and adventurous heart inspire everyone around you. May your special day be as bright as you are! 🎂💖"
  },
  {
    id: 63,
    content:
      "Happy birthday to my incredible nephew! Your energy and creativity bring so much joy to our lives. Wishing you a year filled with everything you love! 🌟💙"
  },
  {
    id: 64,
    content:
      "To my amazing nephew, happy birthday! Your adventurous spirit and joyful heart light up our family. May your day be filled with wonderful moments! 🎈❤️"
  },
  {
    id: 65,
    content:
      "Happy birthday, dear nephew! Your energy and laughter bring us all joy. May this year be filled with adventures and cherished moments! 🎉💖"
  },
  {
    id: 66,
    content:
      "To my beloved nephew, happy birthday! Your unique spirit and kind heart inspire everyone around you. Wishing you a fantastic year ahead! 🎂💙"
  },
  {
    id: 67,
    content:
      "Happy birthday, nephew! Your adventurous heart and cheerful nature make every moment memorable. May your special day be filled with love and joy! 🌟❤️"
  },
  {
    id: 68,
    content:
      "To my incredible nephew, happy birthday! Your laughter and energy light up our lives. Wishing you a year full of happiness and unforgettable experiences! 🎈💖"
  },
  {
    id: 69,
    content:
      "Happy birthday to my fabulous nephew! Your creativity and joyful spirit make every day special. May your birthday be filled with love and cherished moments! 🎉💙"
  },
  {
    id: 70,
    content:
      "To my sweet nephew, happy birthday! Your kindness and adventurous nature are treasures we hold dear. May this year bring you amazing adventures! 🎂❤️"
  },
  {
    id: 71,
    content:
      "Happy birthday, nephew! Your energy and creativity inspire us all. Wishing you a year filled with joy and love! 🌟💖"
  },
  {
    id: 72,
    content:
      "To my wonderful nephew, happy birthday! Your laughter and enthusiasm brighten our family gatherings. May your special day be surrounded by happiness and love! 🎈💙"
  },
  {
    id: 73,
    content:
      "Happy birthday to my incredible nephew! Your adventurous spirit and kind heart make life so much richer. Wishing you a fantastic year ahead filled with everything you adore! 🎉❤️"
  },
  {
    id: 74,
    content:
      "To my amazing nephew, happy birthday! Your spirit and joy make every moment special. May your day be filled with love and wonderful memories! 🎂💖"
  },
  {
    id: 75,
    content:
      "Happy birthday, dear nephew! Your smile brightens our days, and your laughter fills our hearts with joy. May your year ahead be as wonderful as you are! 🎉💙"
  },
  {
    id: 76,
    content:
      "To my beloved nephew, happy birthday! Your unique spirit and boundless energy inspire everyone around you. Wishing you endless happiness today and always! 🎂❤️"
  },
  {
    id: 77,
    content:
      "Happy birthday, nephew! Your kind heart and adventurous nature are gifts to everyone who knows you. May this year be filled with love and laughter! 🌟💖"
  },
  {
    id: 78,
    content:
      "To my incredible nephew, happy birthday! Your zest for life is contagious, and your laughter brings us all joy. Wishing you a year full of exciting adventures! 🎈💙"
  },
  {
    id: 79,
    content:
      "Happy birthday to my fabulous nephew! Your creativity and spirit make every day special. May your birthday be filled with dreams coming true! 🎉❤️"
  },
  {
    id: 80,
    content:
      "To my sweet nephew, happy birthday! Your joy and energy bring light to our family. Wishing you a year filled with cherished moments and happiness! 🎂💖"
  },
  {
    id: 81,
    content:
      "Happy birthday, nephew! Your adventurous nature and creative spirit inspire us all. Wishing you a year filled with beautiful experiences and love! 🎉💙"
  },
  {
    id: 82,
    content:
      "To my beloved nephew, happy birthday! Your energy and laughter fill our hearts with joy. May this year bring you amazing adventures and happiness! 🎂❤️"
  },
  {
    id: 83,
    content:
      "Happy birthday to my fabulous nephew! Your adventurous spirit and kind heart are gifts we treasure. Wishing you a fantastic year ahead! 🌟💖"
  },
  {
    id: 84,
    content:
      "To my sweet nephew, happy birthday! Your creativity and joyful nature make every moment special. May your day be filled with love and laughter! 🎈💙"
  },
  {
    id: 85,
    content:
      "Happy birthday, nephew! Your spirit and kindness brighten our family gatherings. Wishing you a year filled with joy and amazing experiences! 🎉❤️"
  },
  {
    id: 86,
    content:
      "To my wonderful nephew, happy birthday! Your laughter and adventurous heart inspire everyone around you. May your special day be as bright as you are! 🎂💖"
  },
  {
    id: 87,
    content:
      "Happy birthday to my incredible nephew! Your energy and creativity bring so much joy to our lives. Wishing you a year filled with everything you love! 🌟💙"
  },
  {
    id: 88,
    content:
      "To my amazing nephew, happy birthday! Your adventurous spirit and joyful heart light up our family. May your day be filled with wonderful moments! 🎈❤️"
  },
  {
    id: 89,
    content:
      "Happy birthday, dear nephew! Your energy and laughter bring us all joy. May this year be filled with adventures and cherished moments! 🎉💖"
  },
  {
    id: 90,
    content:
      "To my beloved nephew, happy birthday! Your unique spirit and kind heart inspire everyone around you. Wishing you a fantastic year ahead! 🎂💙"
  },
  {
    id: 91,
    content:
      "Happy birthday, nephew! Your adventurous heart and cheerful nature make every moment memorable. May your special day be filled with love and joy! 🌟❤️"
  },
  {
    id: 92,
    content:
      "To my incredible nephew, happy birthday! Your laughter and energy light up our lives. Wishing you a year full of happiness and unforgettable experiences! 🎈💖"
  },
  {
    id: 93,
    content:
      "Happy birthday to my fabulous nephew! Your creativity and joyful spirit make every day special. May your birthday be filled with love and cherished moments! 🎉💙"
  },
  {
    id: 94,
    content:
      "To my sweet nephew, happy birthday! Your kindness and adventurous nature are treasures we hold dear. May this year bring you amazing adventures! 🎂❤️"
  },
  {
    id: 95,
    content:
      "Happy birthday, nephew! Your energy and creativity inspire us all. Wishing you a year filled with joy and love! 🌟💖"
  },
  {
    id: 96,
    content:
      "To my wonderful nephew, happy birthday! Your laughter and enthusiasm brighten our family gatherings. May your special day be surrounded by happiness and love! 🎈💙"
  },
  {
    id: 97,
    content:
      "Happy birthday to my incredible nephew! Your adventurous spirit and kind heart make life so much richer. Wishing you a fantastic year ahead filled with everything you adore! 🎉❤️"
  },
  {
    id: 98,
    content:
      "To my amazing nephew, happy birthday! Your spirit and joy make every moment special. May your day be filled with love and wonderful memories! 🎂💖"
  },
  {
    id: 99,
    content:
      "Happy birthday, dear nephew! Your smile brightens our days, and your laughter fills our hearts with joy. May your year ahead be as wonderful as you are! 🎉💙"
  },
  {
    id: 100,
    content:
      "To my beloved nephew, happy birthday! Your unique spirit and boundless energy inspire everyone around you. Wishing you endless happiness today and always! 🎂❤️"
  }
];

const grandSon = [
  {
    id: 1,
    content:
      "Happy birthday, dear grandson! Your bright smile and joyful spirit fill our hearts with happiness. May your special day be as wonderful as you are! 🎉💖"
  },
  {
    id: 2,
    content:
      "To my amazing grandson, happy birthday! Your creativity and kindness inspire us all. Wishing you a year full of exciting adventures and cherished memories! 🎂❤️"
  },
  {
    id: 3,
    content:
      "Happy birthday, grandson! Your laughter is a melody that brightens our days. May this year bring you all the joy and happiness you deserve! 🎈💙"
  },
  {
    id: 4,
    content:
      "To my precious grandson, happy birthday! Your enthusiasm for life is contagious, and your spirit brings us endless joy. Enjoy your special day to the fullest! 🎉💖"
  },
  {
    id: 5,
    content:
      "Happy birthday to my wonderful grandson! Your kindness and adventurous spirit make life so much richer. May your year ahead be filled with love and laughter! 🎂❤️"
  },
  {
    id: 6,
    content:
      "To my beloved grandson, happy birthday! Your smile lights up our lives, and your happiness is our greatest treasure. Wishing you a day filled with fun and joy! 🎈💙"
  },
  {
    id: 7,
    content:
      "Happy birthday, dear grandson! Your creativity and curiosity inspire us all. May your special day be filled with excitement and wonderful surprises! 🎉💖"
  },
  {
    id: 8,
    content:
      "To my fantastic grandson, happy birthday! Your adventurous nature makes every moment special. May this year bring you amazing experiences and endless happiness! 🎂❤️"
  },
  {
    id: 9,
    content:
      "Happy birthday, grandson! Your energy and joy fill our hearts with delight. Wishing you a year full of laughter and unforgettable memories! 🎈💙"
  },
  {
    id: 10,
    content:
      "To my incredible grandson, happy birthday! Your kindness and unique spirit are gifts we cherish. May your day be as amazing as you are! 🎉💖"
  },
  {
    id: 11,
    content:
      "Happy birthday to my wonderful grandson! Your creativity and laughter make life brighter. Wishing you a fantastic year ahead filled with dreams come true! 🎂❤️"
  },
  {
    id: 12,
    content:
      "To my sweet grandson, happy birthday! Your spirit and joy bring light to our family. May your day be filled with love and laughter! 🎈💙"
  },
  {
    id: 13,
    content:
      "Happy birthday, grandson! Your adventurous heart and cheerful nature make every moment memorable. Wishing you endless happiness today and always! 🎉💖"
  },
  {
    id: 14,
    content:
      "To my beloved grandson, happy birthday! Your smile and laughter are treasures we hold dear. May this year bring you amazing adventures and joy! 🎂❤️"
  },
  {
    id: 15,
    content:
      "Happy birthday, dear grandson! Your creativity and enthusiasm inspire us all. Wishing you a year filled with beautiful moments and happiness! 🎈💙"
  },
  {
    id: 16,
    content:
      "To my amazing grandson, happy birthday! Your kindness and spirit light up our lives. May your special day be surrounded by love and joy! 🎉💖"
  },
  {
    id: 17,
    content:
      "Happy birthday to my fantastic grandson! Your energy and creativity make every day special. May this year be filled with everything you adore! 🎂❤️"
  },
  {
    id: 18,
    content:
      "To my wonderful grandson, happy birthday! Your laughter brings joy to our family, and your spirit is a blessing. Enjoy your day to the fullest! 🎈💙"
  },
  {
    id: 19,
    content:
      "Happy birthday, grandson! Your adventurous nature and kind heart inspire everyone around you. Wishing you a year filled with love and unforgettable experiences! 🎉💖"
  },
  {
    id: 20,
    content:
      "To my sweet grandson, happy birthday! Your joy and energy make every moment special. May your day be filled with happiness and laughter! 🎂❤️"
  },
  {
    id: 21,
    content:
      "Happy birthday, dear grandson! Your smile brightens our days, and your laughter fills our hearts with joy. May this year be as wonderful as you are! 🎈💙"
  },
  {
    id: 22,
    content:
      "To my beloved grandson, happy birthday! Your unique spirit and boundless energy inspire everyone around you. Wishing you endless happiness today and always! 🎉💖"
  },
  {
    id: 23,
    content:
      "Happy birthday, grandson! Your kind heart and adventurous nature are gifts to everyone who knows you. May this year be filled with love and laughter! 🎂❤️"
  },
  {
    id: 24,
    content:
      "To my incredible grandson, happy birthday! Your zest for life is contagious, and your laughter brings us all joy. Wishing you a year full of exciting adventures! 🎈💙"
  },
  {
    id: 25,
    content:
      "Happy birthday to my fabulous grandson! Your creativity and spirit make every day special. May your birthday be filled with dreams coming true! 🎉💖"
  },
  {
    id: 26,
    content:
      "To my sweet grandson, happy birthday! Your joy and energy bring light to our family. Wishing you a year filled with cherished moments and happiness! 🎂❤️"
  },
  {
    id: 27,
    content:
      "Happy birthday, grandson! Your adventurous nature and creative spirit inspire us all. Wishing you a year filled with beautiful experiences and love! 🎉💙"
  },
  {
    id: 28,
    content:
      "To my beloved grandson, happy birthday! Your energy and laughter fill our hearts with joy. May this year bring you amazing adventures and happiness! 🎂❤️"
  },
  {
    id: 29,
    content:
      "Happy birthday to my fabulous grandson! Your adventurous spirit and kind heart are gifts we treasure. Wishing you a fantastic year ahead! 🌟💖"
  },
  {
    id: 30,
    content:
      "To my sweet grandson, happy birthday! Your creativity and joyful nature make every moment special. May your day be filled with love and laughter! 🎈💙"
  },
  {
    id: 31,
    content:
      "Happy birthday, grandson! Your spirit and kindness brighten our family gatherings. Wishing you a year filled with joy and amazing experiences! 🎉❤️"
  },
  {
    id: 32,
    content:
      "To my wonderful grandson, happy birthday! Your laughter and adventurous heart inspire everyone around you. May your special day be as bright as you are! 🎂💖"
  },
  {
    id: 33,
    content:
      "Happy birthday to my incredible grandson! Your energy and creativity bring so much joy to our lives. Wishing you a year filled with everything you love! 🌟💙"
  },
  {
    id: 34,
    content:
      "To my amazing grandson, happy birthday! Your adventurous spirit and joyful heart light up our family. May your day be filled with wonderful moments! 🎈❤️"
  },
  {
    id: 35,
    content:
      "Happy birthday, dear grandson! Your energy and laughter bring us all joy. May this year be filled with adventures and cherished moments! 🎉💖"
  },
  {
    id: 36,
    content:
      "To my beloved grandson, happy birthday! Your unique spirit and kind heart inspire everyone around you. Wishing you a fantastic year ahead! 🎂💙"
  },
  {
    id: 37,
    content:
      "Happy birthday, grandson! Your adventurous heart and cheerful nature make every moment memorable. May your special day be filled with love and joy! 🌟❤️"
  },
  {
    id: 38,
    content:
      "To my incredible grandson, happy birthday! Your laughter and energy light up our lives. Wishing you a year full of happiness and unforgettable experiences! 🎈💖"
  },
  {
    id: 39,
    content:
      "Happy birthday to my fabulous grandson! Your creativity and joyful spirit make every day special. May your birthday be filled with love and cherished moments! 🎉💙"
  },
  {
    id: 40,
    content:
      "To my sweet grandson, happy birthday! Your kindness and adventurous nature are treasures we hold dear. May this year bring you amazing adventures! 🎂❤️"
  },
  {
    id: 41,
    content:
      "Happy birthday, grandson! Your energy and creativity inspire us all. Wishing you a year filled with joy and love! 🌟💖"
  },
  {
    id: 42,
    content:
      "To my wonderful grandson, happy birthday! Your laughter and enthusiasm brighten our family gatherings. May your special day be surrounded by happiness and love! 🎈💙"
  },
  {
    id: 43,
    content:
      "Happy birthday to my incredible grandson! Your adventurous spirit and kind heart make life so much richer. Wishing you a fantastic year ahead filled with everything you adore! 🎉❤️"
  },
  {
    id: 44,
    content:
      "To my amazing grandson, happy birthday! Your spirit and joy make every moment special. May your day be filled with love and wonderful memories! 🎂💖"
  },
  {
    id: 45,
    content:
      "Happy birthday, dear grandson! Your smile brightens our days, and your laughter fills our hearts with joy. May your year ahead be as wonderful as you are! 🎉💙"
  },
  {
    id: 46,
    content:
      "To my beloved grandson, happy birthday! Your unique spirit and boundless energy inspire everyone around you. Wishing you endless happiness today and always! 🎂❤️"
  },
  {
    id: 47,
    content:
      "Happy birthday, dear grandson! Your adventurous spirit and kindness are truly remarkable. May your day be filled with laughter and love! 🎈💖"
  },
  {
    id: 48,
    content:
      "To my amazing grandson, happy birthday! Your curiosity and creativity bring joy to our lives. Wishing you a fantastic year ahead filled with exciting adventures! 🎉💙"
  },
  {
    id: 49,
    content:
      "Happy birthday to my precious grandson! Your laughter and joy make our family gatherings special. May your day be surrounded by love and happiness! 🎂❤️"
  },
  {
    id: 50,
    content:
      "To my wonderful grandson, happy birthday! Your enthusiasm for life is contagious, and your spirit brings us endless joy. Enjoy your special day to the fullest! 🎈💖"
  },
  {
    id: 51,
    content:
      "Happy birthday, dear grandson! Your bright smile and joyful spirit fill our hearts with happiness. May your special day be as wonderful as you are! 🎉💖"
  },
  {
    id: 52,
    content:
      "To my amazing grandson, happy birthday! Your creativity and kindness inspire us all. Wishing you a year full of exciting adventures and cherished memories! 🎂❤️"
  },
  {
    id: 53,
    content:
      "Happy birthday, grandson! Your laughter is a melody that brightens our days. May this year bring you all the joy and happiness you deserve! 🎈💙"
  },
  {
    id: 54,
    content:
      "To my precious grandson, happy birthday! Your enthusiasm for life is contagious, and your spirit brings us endless joy. Enjoy your special day to the fullest! 🎉💖"
  },
  {
    id: 55,
    content:
      "Happy birthday to my wonderful grandson! Your kindness and adventurous spirit make life so much richer. May your year ahead be filled with love and laughter! 🎂❤️"
  },
  {
    id: 56,
    content:
      "To my beloved grandson, happy birthday! Your smile lights up our lives, and your happiness is our greatest treasure. Wishing you a day filled with fun and joy! 🎈💙"
  },
  {
    id: 57,
    content:
      "Happy birthday, dear grandson! Your creativity and curiosity inspire us all. May your special day be filled with excitement and wonderful surprises! 🎉💖"
  },
  {
    id: 58,
    content:
      "To my fantastic grandson, happy birthday! Your adventurous nature makes every moment special. May this year bring you amazing experiences and endless happiness! 🎂❤️"
  },
  {
    id: 59,
    content:
      "Happy birthday, grandson! Your energy and joy fill our hearts with delight. Wishing you a year full of laughter and unforgettable memories! 🎈💙"
  },
  {
    id: 60,
    content:
      "To my incredible grandson, happy birthday! Your kindness and unique spirit are gifts we cherish. May your day be as amazing as you are! 🎉💖"
  },
  {
    id: 61,
    content:
      "Happy birthday to my wonderful grandson! Your creativity and laughter make life brighter. Wishing you a fantastic year ahead filled with dreams come true! 🎂❤️"
  },
  {
    id: 62,
    content:
      "To my sweet grandson, happy birthday! Your spirit and joy bring light to our family. May your day be filled with love and laughter! 🎈💙"
  },
  {
    id: 63,
    content:
      "Happy birthday, grandson! Your adventurous nature and kind heart inspire everyone around you. Wishing you a year filled with love and unforgettable experiences! 🎉💖"
  },
  {
    id: 64,
    content:
      "To my beloved grandson, happy birthday! Your energy and laughter fill our hearts with joy. May this year bring you amazing adventures and happiness! 🎂❤️"
  },
  {
    id: 65,
    content:
      "Happy birthday to my fabulous grandson! Your adventurous spirit and kind heart are gifts we treasure. Wishing you a fantastic year ahead! 🌟💖"
  },
  {
    id: 66,
    content:
      "To my sweet grandson, happy birthday! Your creativity and joyful nature make every moment special. May your day be filled with love and laughter! 🎈💙"
  },
  {
    id: 67,
    content:
      "Happy birthday, grandson! Your spirit and kindness brighten our family gatherings. Wishing you a year filled with joy and amazing experiences! 🎉❤️"
  },
  {
    id: 68,
    content:
      "To my wonderful grandson, happy birthday! Your laughter and adventurous heart inspire everyone around you. May your special day be as bright as you are! 🎂💖"
  },
  {
    id: 69,
    content:
      "Happy birthday to my incredible grandson! Your energy and creativity bring so much joy to our lives. Wishing you a year filled with everything you love! 🌟💙"
  },
  {
    id: 70,
    content:
      "To my amazing grandson, happy birthday! Your adventurous spirit and joyful heart light up our family. May your day be filled with wonderful moments! 🎈❤️"
  },
  {
    id: 71,
    content:
      "Happy birthday, dear grandson! Your energy and laughter bring us all joy. May this year be filled with adventures and cherished moments! 🎉💖"
  },
  {
    id: 72,
    content:
      "To my beloved grandson, happy birthday! Your unique spirit and kind heart inspire everyone around you. Wishing you a fantastic year ahead! 🎂💙"
  },
  {
    id: 73,
    content:
      "Happy birthday, grandson! Your adventurous heart and cheerful nature make every moment memorable. May your special day be filled with love and joy! 🌟❤️"
  },
  {
    id: 74,
    content:
      "To my incredible grandson, happy birthday! Your laughter and energy light up our lives. Wishing you a year full of happiness and unforgettable experiences! 🎈💖"
  },
  {
    id: 75,
    content:
      "Happy birthday to my fabulous grandson! Your creativity and joyful spirit make every day special. May your birthday be filled with love and cherished moments! 🎉💙"
  },
  {
    id: 76,
    content:
      "To my sweet grandson, happy birthday! Your kindness and adventurous nature are treasures we hold dear. May this year bring you amazing adventures! 🎂❤️"
  },
  {
    id: 77,
    content:
      "Happy birthday, grandson! Your energy and creativity inspire us all. Wishing you a year filled with joy and love! 🌟💖"
  },
  {
    id: 78,
    content:
      "To my wonderful grandson, happy birthday! Your laughter and enthusiasm brighten our family gatherings. May your special day be surrounded by happiness and love! 🎈💙"
  },
  {
    id: 79,
    content:
      "Happy birthday to my incredible grandson! Your adventurous spirit and kind heart make life so much richer. Wishing you a fantastic year ahead filled with everything you adore! 🎉❤️"
  },
  {
    id: 80,
    content:
      "To my amazing grandson, happy birthday! Your spirit and joy make every moment special. May your day be filled with love and wonderful memories! 🎂💖"
  },
  {
    id: 81,
    content:
      "Happy birthday, dear grandson! Your smile brightens our days, and your laughter fills our hearts with joy. May your year ahead be as wonderful as you are! 🎉💙"
  },
  {
    id: 82,
    content:
      "To my beloved grandson, happy birthday! Your unique spirit and boundless energy inspire everyone around you. Wishing you endless happiness today and always! 🎂❤️"
  },
  {
    id: 83,
    content:
      "Happy birthday, dear grandson! Your adventurous spirit and kindness are truly remarkable. May your day be filled with laughter and love! 🎈💖"
  },
  {
    id: 84,
    content:
      "To my amazing grandson, happy birthday! Your curiosity and creativity bring joy to our lives. Wishing you a fantastic year ahead filled with exciting adventures! 🎉💙"
  },
  {
    id: 85,
    content:
      "Happy birthday to my precious grandson! Your laughter and joy make our family gatherings special. May your day be surrounded by love and happiness! 🎂❤️"
  },
  {
    id: 86,
    content:
      "To my wonderful grandson, happy birthday! Your enthusiasm for life is contagious, and your spirit brings us endless joy. Enjoy your special day to the fullest! 🎈💖"
  },
  {
    id: 87,
    content:
      "Happy birthday, dear grandson! Your bright smile and joyful spirit fill our hearts with happiness. May your special day be as wonderful as you are! 🎉💖"
  },
  {
    id: 88,
    content:
      "To my amazing grandson, happy birthday! Your creativity and kindness inspire us all. Wishing you a year full of exciting adventures and cherished memories! 🎂❤️"
  },
  {
    id: 89,
    content:
      "Happy birthday, grandson! Your laughter is a melody that brightens our days. May this year bring you all the joy and happiness you deserve! 🎈💙"
  },
  {
    id: 90,
    content:
      "To my precious grandson, happy birthday! Your enthusiasm for life is contagious, and your spirit brings us endless joy. Enjoy your special day to the fullest! 🎉💖"
  },
  {
    id: 91,
    content:
      "Happy birthday to my wonderful grandson! Your kindness and adventurous spirit make life so much richer. May your year ahead be filled with love and laughter! 🎂❤️"
  },
  {
    id: 92,
    content:
      "To my beloved grandson, happy birthday! Your smile lights up our lives, and your happiness is our greatest treasure. Wishing you a day filled with fun and joy! 🎈💙"
  },
  {
    id: 93,
    content:
      "Happy birthday, dear grandson! Your creativity and curiosity inspire us all. May your special day be filled with excitement and wonderful surprises! 🎉💖"
  },
  {
    id: 94,
    content:
      "To my fantastic grandson, happy birthday! Your adventurous nature makes every moment special. May this year bring you amazing experiences and endless happiness! 🎂❤️"
  },
  {
    id: 95,
    content:
      "Happy birthday, grandson! Your energy and joy fill our hearts with delight. Wishing you a year full of laughter and unforgettable memories! 🎈💙"
  },
  {
    id: 96,
    content:
      "To my incredible grandson, happy birthday! Your kindness and unique spirit are gifts we cherish. May your day be as amazing as you are! 🎉💖"
  },
  {
    id: 97,
    content:
      "Happy birthday to my wonderful grandson! Your creativity and laughter make life brighter. Wishing you a fantastic year ahead filled with dreams come true! 🎂❤️"
  },
  {
    id: 98,
    content:
      "To my sweet grandson, happy birthday! Your spirit and joy bring light to our family. May your day be filled with love and laughter! 🎈💙"
  },
  {
    id: 99,
    content:
      "Happy birthday, grandson! Your adventurous nature and kind heart inspire everyone around you. Wishing you a year filled with love and unforgettable experiences! 🎉💖"
  },
  {
    id: 100,
    content:
      "To my beloved grandson, happy birthday! Your energy and laughter fill our hearts with joy. May this year bring you amazing adventures and happiness! 🎂❤️"
  },
  {
    id: 101,
    content:
      "Happy birthday to my fabulous grandson! Your adventurous spirit and kind heart are gifts we treasure. Wishing you a fantastic year ahead! 🌟💖"
  },
  {
    id: 102,
    content:
      "To my sweet grandson, happy birthday! Your creativity and joyful nature make every moment special. May your day be filled with love and laughter! 🎈💙"
  },
  {
    id: 103,
    content:
      "Happy birthday, grandson! Your spirit and kindness brighten our family gatherings. Wishing you a year filled with joy and amazing experiences! 🎉❤️"
  },
  {
    id: 104,
    content:
      "To my wonderful grandson, happy birthday! Your laughter and adventurous heart inspire everyone around you. May your special day be as bright as you are! 🎂💖"
  },
  {
    id: 105,
    content:
      "Happy birthday to my incredible grandson! Your energy and creativity bring so much joy to our lives. Wishing you a year filled with everything you love! 🌟💙"
  },
  {
    id: 106,
    content:
      "To my amazing grandson, happy birthday! Your adventurous spirit and joyful heart light up our family. May your day be filled with wonderful moments! 🎈❤️"
  },
  {
    id: 107,
    content:
      "Happy birthday, dear grandson! Your energy and laughter bring us all joy. May this year be filled with adventures and cherished moments! 🎉💖"
  },
  {
    id: 108,
    content:
      "To my beloved grandson, happy birthday! Your unique spirit and kind heart inspire everyone around you. Wishing you a fantastic year ahead! 🎂💙"
  },
  {
    id: 109,
    content:
      "Happy birthday, grandson! Your adventurous heart and cheerful nature make every moment memorable. May your special day be filled with love and joy! 🌟❤️"
  },
  {
    id: 110,
    content:
      "To my incredible grandson, happy birthday! Your laughter and energy light up our lives. Wishing you a year full of happiness and unforgettable experiences! 🎈💖"
  },
  {
    id: 111,
    content:
      "Happy birthday to my fabulous grandson! Your creativity and joyful spirit make every day special. May your birthday be filled with love and cherished moments! 🎉💙"
  },
  {
    id: 112,
    content:
      "To my sweet grandson, happy birthday! Your kindness and adventurous nature are treasures we hold dear. May this year bring you amazing adventures! 🎂❤️"
  },
  {
    id: 113,
    content:
      "Happy birthday, grandson! Your energy and creativity inspire us all. Wishing you a year filled with joy and love! 🌟💖"
  },
  {
    id: 114,
    content:
      "To my wonderful grandson, happy birthday! Your laughter and enthusiasm brighten our family gatherings. May your special day be surrounded by happiness and love! 🎈💙"
  },
  {
    id: 115,
    content:
      "Happy birthday to my incredible grandson! Your adventurous spirit and kind heart make life so much richer. Wishing you a fantastic year ahead filled with everything you adore! 🎉❤️"
  },
  {
    id: 116,
    content:
      "To my amazing grandson, happy birthday! Your spirit and joy make every moment special. May your day be filled with love and wonderful memories! 🎂💖"
  },
  {
    id: 117,
    content:
      "Happy birthday, dear grandson! Your smile brightens our days, and your laughter fills our hearts with joy. May your year ahead be as wonderful as you are! 🎉💙"
  },
  {
    id: 118,
    content:
      "To my beloved grandson, happy birthday! Your unique spirit and boundless energy inspire everyone around you. Wishing you endless happiness today and always! 🎂❤️"
  },
  {
    id: 119,
    content:
      "Happy birthday, dear grandson! Your adventurous spirit and kindness are truly remarkable. May your day be filled with laughter and love! 🎈💖"
  },
  {
    id: 120,
    content:
      "To my amazing grandson, happy birthday! Your curiosity and creativity bring joy to our lives. Wishing you a fantastic year ahead filled with exciting adventures! 🎉💙"
  },
  {
    id: 121,
    content:
      "Happy birthday to my precious grandson! Your laughter and joy make our family gatherings special. May your day be surrounded by love and happiness! 🎂❤️"
  },
  {
    id: 122,
    content:
      "To my wonderful grandson, happy birthday! Your enthusiasm for life is contagious, and your spirit brings us endless joy. Enjoy your special day to the fullest! 🎈💖"
  },
  {
    id: 123,
    content:
      "Happy birthday, dear grandson! Your bright smile and joyful spirit fill our hearts with happiness. May your special day be as wonderful as you are! 🎉💖"
  },
  {
    id: 124,
    content:
      "To my amazing grandson, happy birthday! Your creativity and kindness inspire us all. Wishing you a year full of exciting adventures and cherished memories! 🎂❤️"
  },
  {
    id: 125,
    content:
      "Happy birthday, grandson! Your laughter is a melody that brightens our days. May this year bring you all the joy and happiness you deserve! 🎈💙"
  },
  {
    id: 126,
    content:
      "To my precious grandson, happy birthday! Your enthusiasm for life is contagious, and your spirit brings us endless joy. Enjoy your special day to the fullest! 🎉💖"
  },
  {
    id: 127,
    content:
      "Happy birthday to my wonderful grandson! Your kindness and adventurous spirit make life so much richer. May your year ahead be filled with love and laughter! 🎂❤️"
  },
  {
    id: 128,
    content:
      "To my beloved grandson, happy birthday! Your smile lights up our lives, and your happiness is our greatest treasure. Wishing you a day filled with fun and joy! 🎈💙"
  },
  {
    id: 129,
    content:
      "Happy birthday, dear grandson! Your creativity and curiosity inspire us all. May your special day be filled with excitement and wonderful surprises! 🎉💖"
  },
  {
    id: 130,
    content:
      "To my fantastic grandson, happy birthday! Your adventurous nature makes every moment special. May this year bring you amazing experiences and endless happiness! 🎂❤️"
  },
  {
    id: 131,
    content:
      "Happy birthday, grandson! Your energy and joy fill our hearts with delight. Wishing you a year full of laughter and unforgettable memories! 🎈💙"
  },
  {
    id: 132,
    content:
      "To my incredible grandson, happy birthday! Your kindness and unique spirit are gifts we cherish. May your day be as amazing as you are! 🎉💖"
  },
  {
    id: 133,
    content:
      "Happy birthday to my wonderful grandson! Your creativity and laughter make life brighter. Wishing you a fantastic year ahead filled with dreams come true! 🎂❤️"
  }
];

const grandDaughter = [
  {
    id: 1,
    content:
      "Happy Birthday to my sweet granddaughter! Your laughter brings joy to our lives. May your day be filled with fun and laughter! 🎉❤️"
  },
  {
    id: 2,
    content:
      "To my precious granddaughter, happy birthday! You are a shining star in our family. May your dreams come true this year! 🎂💖"
  },
  {
    id: 3,
    content:
      "Happy Birthday, dear granddaughter! Your kindness and spirit light up our world. Enjoy your special day! 🎈💙"
  },
  {
    id: 4,
    content:
      "To my wonderful granddaughter, happy birthday! You have a beautiful heart. May this year bring you endless joy and adventure! 🎉❤️"
  },
  {
    id: 5,
    content:
      "Happy Birthday to my lovely granddaughter! Your creativity and laughter inspire us. Celebrate big today! 🎂💖"
  },
  {
    id: 6,
    content:
      "To my amazing granddaughter, happy birthday! You are a treasure in our family. May your year be filled with happiness! 🎈💙"
  },
  {
    id: 7,
    content:
      "Happy Birthday, sweet granddaughter! Your smile brightens our days. Wishing you a fantastic birthday full of love! 🎉❤️"
  },
  {
    id: 8,
    content:
      "To my cherished granddaughter, happy birthday! You are a source of joy and inspiration. Have a magical day! 🎂💖"
  },
  {
    id: 9,
    content:
      "Happy Birthday to my beautiful granddaughter! Your laughter is music to our hearts. Enjoy every moment of your special day! 🎈💙"
  },
  {
    id: 10,
    content:
      "To my extraordinary granddaughter, happy birthday! Your dreams are limitless. May this year be your best one yet! 🎉❤️"
  },
  {
    id: 11,
    content:
      "Happy Birthday, my dear granddaughter! You have a heart full of love. May your journey be filled with beautiful moments! 🎂💖"
  },
  {
    id: 12,
    content:
      "To my talented granddaughter, happy birthday! Your creativity knows no bounds. Enjoy a year filled with inspiration and joy! 🎈💙"
  },
  {
    id: 13,
    content:
      "Happy Birthday to my sweet granddaughter! Your happiness is our greatest joy. Wishing you all the best today! 🎉❤️"
  },
  {
    id: 14,
    content:
      "To my beloved granddaughter, happy birthday! You bring light and laughter to our lives. Celebrate your day with joy! 🎂💖"
  },
  {
    id: 15,
    content:
      "Happy Birthday, my precious granddaughter! Your spirit is inspiring, and your smile is contagious. Have an amazing birthday! 🎈💙"
  },
  {
    id: 16,
    content:
      "To my remarkable granddaughter, happy birthday! You are a blessing to our family. May this year be filled with love! 🎉❤️"
  },
  {
    id: 17,
    content:
      "Happy Birthday to my amazing granddaughter! Your joy is infectious. May your day be filled with magical moments! 🎂💖"
  },
  {
    id: 18,
    content:
      "To my wonderful granddaughter, happy birthday! You are unique and special. Enjoy every moment of your celebration! 🎈💙"
  },
  {
    id: 19,
    content:
      "Happy Birthday, dear granddaughter! Your laughter fills our hearts with joy. May your dreams take flight this year! 🎉❤️"
  },
  {
    id: 20,
    content:
      "To my sweet granddaughter, happy birthday! Your kindness and love make the world a better place. Celebrate big today! 🎂💖"
  },
  {
    id: 21,
    content:
      "Happy Birthday to my precious granddaughter! Your creativity is a gift to all of us. Have a fantastic celebration! 🎈💙"
  },
  {
    id: 22,
    content:
      "To my extraordinary granddaughter, happy birthday! You inspire us every day. May your journey be filled with happiness! 🎉❤️"
  },
  {
    id: 23,
    content:
      "Happy Birthday, my dear granddaughter! You bring so much joy into our lives. Enjoy your special day to the fullest! 🎂💖"
  },
  {
    id: 24,
    content:
      "To my amazing granddaughter, happy birthday! Your heart is as beautiful as your smile. May this year bring you joy! 🎈💙"
  },
  {
    id: 25,
    content:
      "Happy Birthday to my lovely granddaughter! Your laughter lights up our lives. May your birthday be filled with magic! 🎉❤️"
  },
  {
    id: 26,
    content:
      "To my wonderful granddaughter, happy birthday! You are a ray of sunshine in our family. Celebrate your day with joy! 🎂💖"
  },
  {
    id: 27,
    content:
      "Happy Birthday, sweet granddaughter! Your spirit is unbreakable, and your heart is pure. Enjoy your special day! 🎈💙"
  },
  {
    id: 28,
    content:
      "To my precious granddaughter, happy birthday! Your joy is contagious. May your dreams come true this year! 🎉❤️"
  },
  {
    id: 29,
    content:
      "Happy Birthday to my beautiful granddaughter! Your kindness and love make our family whole. Have a wonderful celebration! 🎂💖"
  },
  {
    id: 30,
    content:
      "To my talented granddaughter, happy birthday! Your creativity is inspiring. May this year be filled with new adventures! 🎈💙"
  },
  {
    id: 31,
    content:
      "Happy Birthday, my dear granddaughter! Your laughter is music to our ears. Enjoy every moment of your special day! 🎉❤️"
  },
  {
    id: 32,
    content:
      "To my amazing granddaughter, happy birthday! Your love and laughter fill our hearts. Celebrate your day with joy! 🎂💖"
  },
  {
    id: 33,
    content:
      "Happy Birthday to my sweet granddaughter! You are a gift to our family. May this year bring you endless happiness! 🎈💙"
  },
  {
    id: 34,
    content:
      "To my extraordinary granddaughter, happy birthday! Your spirit is bright, and your dreams are big. Enjoy your special day! 🎉❤️"
  },
  {
    id: 35,
    content:
      "Happy Birthday, my precious granddaughter! Your joy is our greatest treasure. May your birthday be as wonderful as you are! 🎂💖"
  },
  {
    id: 36,
    content:
      "To my lovely granddaughter, happy birthday! Your heart is full of love and kindness. Have a fantastic celebration! 🎈💙"
  },
  {
    id: 37,
    content:
      "Happy Birthday to my wonderful granddaughter! Your laughter brightens our days. May this year be filled with joy and success! 🎉❤️"
  },
  {
    id: 38,
    content:
      "To my talented granddaughter, happy birthday! Your creativity knows no bounds. May your dreams take flight this year! 🎂💖"
  },
  {
    id: 39,
    content:
      "Happy Birthday, dear granddaughter! Your spirit is unbreakable. Enjoy your special day filled with love and laughter! 🎈💙"
  },
  {
    id: 40,
    content:
      "To my amazing granddaughter, happy birthday! Your joy is infectious, and your heart is pure. Celebrate big today! 🎉❤️"
  },
  {
    id: 41,
    content:
      "Happy Birthday to my cherished granddaughter! Your laughter brings us joy. May your day be as beautiful as you are! 🎂💖"
  },
  {
    id: 42,
    content:
      "To my wonderful granddaughter, happy birthday! You are a blessing to our family. May this year be filled with happiness! 🎈💙"
  },
  {
    id: 43,
    content:
      "Happy Birthday, sweet granddaughter! Your spirit shines bright. May your dreams come true this year! 🎉❤️"
  },
  {
    id: 44,
    content:
      "To my precious granddaughter, happy birthday! Your kindness and love make the world a better place. Celebrate your day! 🎂💖"
  },
  {
    id: 45,
    content:
      "Happy Birthday to my extraordinary granddaughter! Your joy fills our hearts. May your journey be filled with wonderful surprises! 🎈💙"
  },
  {
    id: 46,
    content:
      "To my lovely granddaughter, happy birthday! You inspire us every day. Enjoy a year filled with love and adventure! 🎉❤️"
  },
  {
    id: 47,
    content:
      "Happy Birthday, my dear granddaughter! Your laughter and spirit fill our lives with happiness. Have an unforgettable day! 🎂💖"
  },
  {
    id: 48,
    content:
      "To my talented granddaughter, happy birthday! Your creativity and passion inspire us all. May this year bring you joy! 🎈💙"
  },
  {
    id: 49,
    content:
      "Happy Birthday to my beautiful granddaughter! Your kindness and love make our family whole. Enjoy every moment of your celebration! 🎉❤️"
  },
  {
    id: 50,
    content:
      "To my amazing granddaughter, happy birthday! Your joy is infectious. May this year be filled with happiness and success! 🎂💖"
  },
  {
    id: 51,
    content:
      "Happy Birthday, sweet granddaughter! Your spirit is bright, and your laughter is contagious. Celebrate big today! 🎈💙"
  },
  {
    id: 52,
    content:
      "To my cherished granddaughter, happy birthday! You are a gift to our family. May your dreams come true this year! 🎉❤️"
  },
  {
    id: 53,
    content:
      "Happy Birthday to my precious granddaughter! Your joy is our greatest treasure. Enjoy your special day to the fullest! 🎂💖"
  },
  {
    id: 54,
    content:
      "To my lovely granddaughter, happy birthday! Your heart is full of love and kindness. Have a fantastic celebration! 🎈💙"
  },
  {
    id: 55,
    content:
      "Happy Birthday, dear granddaughter! Your laughter brightens our days. May your birthday be filled with magic! 🎉❤️"
  },
  {
    id: 56,
    content:
      "To my amazing granddaughter, happy birthday! Your joy is contagious. May this year be filled with wonderful surprises! 🎂💖"
  },
  {
    id: 57,
    content:
      "Happy Birthday to my wonderful granddaughter! You are a ray of sunshine in our family. Celebrate your day with joy! 🎈💙"
  },
  {
    id: 58,
    content:
      "To my extraordinary granddaughter, happy birthday! Your spirit is bright, and your dreams are big. Enjoy your special day! 🎉❤️"
  },
  {
    id: 59,
    content:
      "Happy Birthday, sweet granddaughter! Your laughter is music to our hearts. Have an amazing birthday filled with love! 🎂💖"
  },
  {
    id: 60,
    content:
      "To my talented granddaughter, happy birthday! Your creativity knows no bounds. May your dreams take flight this year! 🎈💙"
  },
  {
    id: 61,
    content:
      "Happy birthday to my wonderful granddaughter! Your laughter brings joy to our hearts. May your special day be filled with all the happiness you bring to our lives."
  },
  {
    id: 62,
    content:
      "To my precious granddaughter, happy birthday! Your dreams are like stars that light up our lives. May this year bring you closer to all your wishes."
  },
  {
    id: 63,
    content:
      "Wishing a fabulous birthday to my dear granddaughter! Your kindness and creativity inspire everyone around you. May your day be as bright as your future."
  },
  {
    id: 64,
    content:
      "Happy birthday! Watching you grow up has been one of my greatest joys. May your birthday be filled with love, laughter, and endless possibilities."
  },
  {
    id: 65,
    content:
      "To my lovely granddaughter, happy birthday! Your smile lights up the room, and your spirit is a gift to us all. May this year be filled with adventures and happiness."
  },
  {
    id: 66,
    content:
      "Happy birthday to my incredible granddaughter! Your curiosity and enthusiasm for life inspire me every day. May your special day be as wonderful as you are."
  },
  {
    id: 67,
    content:
      "Wishing you a magical birthday! Your spirit is as bright as the sun, and your heart is full of love. May this year bring you all the joy you deserve."
  },
  {
    id: 68,
    content:
      "To my sweet granddaughter, happy birthday! Your laughter is music to my ears, and your happiness means the world to me. May your day be filled with joy."
  },
  {
    id: 69,
    content:
      "Happy birthday! You are a shining star in our family. May this year be filled with dreams come true and adventures that fill your heart with joy."
  },
  {
    id: 70,
    content:
      "To my beloved granddaughter, happy birthday! Your kindness and creativity make the world a better place. May your day be as beautiful as your heart."
  },
  {
    id: 71,
    content:
      "Happy birthday! Your energy and spirit are contagious. May this year bring you countless reasons to smile and happiness in every moment."
  },
  {
    id: 72,
    content:
      "To my precious granddaughter, happy birthday! You bring so much joy and laughter into our lives. May your special day be filled with love and fun."
  },
  {
    id: 73,
    content:
      "Wishing you a fabulous birthday! Your dreams are important, and I believe in you. May this year help you reach new heights and achieve your goals."
  },
  {
    id: 74,
    content:
      "Happy birthday to my wonderful granddaughter! You are a true gift to our family. May your day be filled with everything your heart desires."
  },
  {
    id: 75,
    content:
      "To my amazing granddaughter, happy birthday! Your spirit shines bright, and your laughter warms our hearts. May this year be your best one yet."
  },
  {
    id: 76,
    content:
      "Happy birthday! You have a heart of gold and a spirit that inspires everyone around you. May your special day be filled with love and happiness."
  },
  {
    id: 77,
    content:
      "To my dear granddaughter, happy birthday! Your creativity and imagination light up our lives. May this year be filled with amazing adventures."
  },
  {
    id: 78,
    content:
      "Wishing you a magical birthday! Your joy and laughter are precious gifts to us all. May your day be as bright as your smile."
  },
  {
    id: 79,
    content:
      "Happy birthday! Watching you grow into the incredible person you are is a true blessing. May your day be filled with love and laughter."
  },
  {
    id: 80,
    content:
      "To my lovely granddaughter, happy birthday! Your dreams are like flowers, blooming beautifully. May this year help you flourish and grow."
  },
  {
    id: 81,
    content:
      "Happy birthday to my amazing granddaughter! Your love and kindness are treasures I hold dear. May your special day be filled with joy and happiness."
  },
  {
    id: 82,
    content:
      "To my precious granddaughter, happy birthday! Your laughter is a melody that fills our hearts with joy. May your year be filled with wonderful moments."
  },
  {
    id: 83,
    content:
      "Wishing you a fabulous birthday! You are a shining star in our lives, and I am so proud of you. May this year bring you all the happiness you deserve."
  },
  {
    id: 84,
    content:
      "Happy birthday! Your spirit is a true gift, bringing light and love to everyone around you. May your day be filled with joy and laughter."
  },
  {
    id: 85,
    content:
      "To my beloved granddaughter, happy birthday! Your heart is filled with kindness and love. May your special day be as wonderful as you are."
  },
  {
    id: 86,
    content:
      "Happy birthday! Your smile brightens our lives, and your laughter brings us joy. May this year be filled with beautiful memories."
  },
  {
    id: 87,
    content:
      "To my wonderful granddaughter, happy birthday! Your creativity and spirit are an inspiration to us all. May your day be filled with love and happiness."
  },
  {
    id: 88,
    content:
      "Wishing you a magical birthday! Your dreams are waiting to be realized, and I believe in you. May this year bring you closer to your goals."
  },
  {
    id: 89,
    content:
      "Happy birthday to my amazing granddaughter! Your joy and laughter are a gift to our family. May your day be filled with everything you love."
  },
  {
    id: 90,
    content:
      "To my precious granddaughter, happy birthday! You are a true light in our lives, and I am grateful for you every day. May this year be your best yet."
  },
  {
    id: 91,
    content:
      "Happy birthday! Your kindness and creativity inspire everyone around you. May your special day be filled with love and laughter."
  },
  {
    id: 92,
    content:
      "To my dear granddaughter, happy birthday! Your dreams are like stars shining brightly. May this year bring you closer to your aspirations."
  },
  {
    id: 93,
    content:
      "Wishing you a fabulous birthday! Your laughter brings joy to our hearts. May your day be filled with everything you love."
  },
  {
    id: 94,
    content:
      "Happy birthday! Watching you grow into the amazing person you are is a true blessing. May your year be filled with love and happiness."
  },
  {
    id: 95,
    content:
      "To my lovely granddaughter, happy birthday! Your spirit is as bright as the sun, and your heart is full of love. May this year be filled with adventures."
  },
  {
    id: 96,
    content:
      "Happy birthday to my incredible granddaughter! Your joy and laughter inspire me every day. May your special day be filled with beautiful memories."
  },
  {
    id: 97,
    content:
      "To my beloved granddaughter, happy birthday! Your kindness and creativity make the world a better place. May your day be as bright as your future."
  },
  {
    id: 98,
    content:
      "Wishing you a magical birthday! Your spirit is as bright as the stars, and your dreams are waiting to be realized. May this year be filled with joy."
  },
  {
    id: 99,
    content:
      "Happy birthday! Your laughter is music to my ears, and your happiness means the world to me. May your day be filled with love."
  },
  {
    id: 100,
    content:
      "To my amazing granddaughter, happy birthday! Your creativity and imagination light up our lives. May this year bring you closer to your dreams."
  }
];

const grandFather = [
  {
    id: 1,
    content:
      "Happy Birthday to my beloved grandfather! Your wisdom and love guide us every day. May this year bring you endless joy and laughter! 🎉❤️"
  },
  {
    id: 2,
    content:
      "To my amazing grandfather, happy birthday! You are the heart of our family. Wishing you a day filled with happiness and cherished moments! 🎂💖"
  },
  {
    id: 3,
    content:
      "Happy Birthday, dear grandfather! Your stories inspire us all. May your day be as special as you are to us! 🎈💙"
  },
  {
    id: 4,
    content:
      "To my wonderful grandfather, happy birthday! Your kindness and strength are a blessing. Enjoy your special day surrounded by love! 🎉❤️"
  },
  {
    id: 5,
    content:
      "Happy Birthday to my incredible grandfather! Your laughter and spirit bring joy to our lives. May your birthday be filled with beautiful moments! 🎂💖"
  },
  {
    id: 6,
    content:
      "To my cherished grandfather, happy birthday! You are a true role model. May this year bring you all the happiness you deserve! 🎈💙"
  },
  {
    id: 7,
    content:
      "Happy Birthday, dear grandfather! Your love is a treasure. Wishing you a fantastic day filled with joy and laughter! 🎉❤️"
  },
  {
    id: 8,
    content:
      "To my remarkable grandfather, happy birthday! Your wisdom is our guiding light. Celebrate your special day with joy! 🎂💖"
  },
  {
    id: 9,
    content:
      "Happy Birthday to my beloved grandfather! Your stories are our legacy. May your day be as wonderful as you are! 🎈💙"
  },
  {
    id: 10,
    content:
      "To my amazing grandfather, happy birthday! You bring so much joy to our lives. May this year be filled with love and laughter! 🎉❤️"
  },
  {
    id: 11,
    content:
      "Happy Birthday, dear grandfather! Your kindness knows no bounds. Enjoy a year filled with beautiful moments and memories! 🎂💖"
  },
  {
    id: 12,
    content:
      "To my wonderful grandfather, happy birthday! Your spirit is unbreakable. May this year bring you endless happiness! 🎈💙"
  },
  {
    id: 13,
    content:
      "Happy Birthday to my incredible grandfather! You are the heart of our family. May your day be filled with joy and love! 🎉❤️"
  },
  {
    id: 14,
    content:
      "To my cherished grandfather, happy birthday! Your love and wisdom are our guiding stars. Celebrate your day with joy! 🎂💖"
  },
  {
    id: 15,
    content:
      "Happy Birthday, dear grandfather! Your laughter is music to our hearts. May your special day be filled with happiness! 🎈💙"
  },
  {
    id: 16,
    content:
      "To my remarkable grandfather, happy birthday! You inspire us with your strength and kindness. Enjoy a fantastic celebration! 🎉❤️"
  },
  {
    id: 17,
    content:
      "Happy Birthday to my beloved grandfather! Your presence is a gift. May this year bring you all the joy you bring to us! 🎂💖"
  },
  {
    id: 18,
    content:
      "To my amazing grandfather, happy birthday! Your stories enrich our lives. Wishing you a day as wonderful as you are! 🎈💙"
  },
  {
    id: 19,
    content:
      "Happy Birthday, dear grandfather! Your wisdom guides us. May your special day be filled with love and joy! 🎉❤️"
  },
  {
    id: 20,
    content:
      "To my wonderful grandfather, happy birthday! Your love is our greatest treasure. Enjoy your day surrounded by family! 🎂💖"
  },
  {
    id: 21,
    content:
      "Happy Birthday to my incredible grandfather! Your spirit is infectious. May this year be your best one yet! 🎈💙"
  },
  {
    id: 22,
    content:
      "To my cherished grandfather, happy birthday! Your kindness makes the world a better place. Celebrate big today! 🎉❤️"
  },
  {
    id: 23,
    content:
      "Happy Birthday, dear grandfather! Your love fills our hearts with joy. Wishing you a fantastic day filled with laughter! 🎂💖"
  },
  {
    id: 24,
    content:
      "To my remarkable grandfather, happy birthday! Your wisdom is our strength. May your day be filled with beautiful moments! 🎈💙"
  },
  {
    id: 25,
    content:
      "Happy Birthday to my beloved grandfather! Your laughter brings us all together. Enjoy a year filled with happiness! 🎉❤️"
  },
  {
    id: 26,
    content:
      "To my amazing grandfather, happy birthday! You are our rock. May this year bring you all the joy you give to us! 🎂💖"
  },
  {
    id: 27,
    content:
      "Happy Birthday, dear grandfather! Your spirit is unbreakable. Enjoy your special day surrounded by love and family! 🎈💙"
  },
  {
    id: 28,
    content:
      "To my wonderful grandfather, happy birthday! Your kindness and strength inspire us. Celebrate your day with joy! 🎉❤️"
  },
  {
    id: 29,
    content:
      "Happy Birthday to my incredible grandfather! Your love lights up our lives. May your day be filled with laughter and joy! 🎂💖"
  },
  {
    id: 30,
    content:
      "To my cherished grandfather, happy birthday! Your presence is a gift to our family. Enjoy your special day! 🎈💙"
  },
  {
    id: 31,
    content:
      "Happy Birthday, dear grandfather! Your wisdom is a treasure. May your year be filled with beautiful memories! 🎉❤️"
  },
  {
    id: 32,
    content:
      "To my remarkable grandfather, happy birthday! Your love enriches our lives. Wishing you all the happiness today! 🎂💖"
  },
  {
    id: 33,
    content:
      "Happy Birthday to my beloved grandfather! Your laughter fills our hearts with joy. Celebrate big today! 🎈💙"
  },
  {
    id: 34,
    content:
      "To my amazing grandfather, happy birthday! Your stories are our legacy. May your day be as wonderful as you are! 🎉❤️"
  },
  {
    id: 35,
    content:
      "Happy Birthday, dear grandfather! Your kindness is a blessing. Enjoy a year filled with love and happiness! 🎂💖"
  },
  {
    id: 36,
    content:
      "To my wonderful grandfather, happy birthday! Your spirit is bright. May this year bring you endless joy! 🎈💙"
  },
  {
    id: 37,
    content:
      "Happy Birthday to my incredible grandfather! Your love and guidance shape our lives. Celebrate your day with joy! 🎉❤️"
  },
  {
    id: 38,
    content:
      "To my cherished grandfather, happy birthday! Your wisdom is a gift. Wishing you a fantastic day filled with laughter! 🎂💖"
  },
  {
    id: 39,
    content:
      "Happy Birthday, dear grandfather! Your presence is our greatest treasure. May your special day be filled with love! 🎈💙"
  },
  {
    id: 40,
    content:
      "To my remarkable grandfather, happy birthday! Your kindness inspires us all. Enjoy your day surrounded by family! 🎉❤️"
  },
  {
    id: 41,
    content:
      "Happy Birthday to my beloved grandfather! Your laughter is music to our souls. May this year be your best yet! 🎂💖"
  },
  {
    id: 42,
    content:
      "To my amazing grandfather, happy birthday! Your spirit is contagious. Wishing you a day filled with happiness! 🎈💙"
  },
  {
    id: 43,
    content:
      "Happy Birthday, dear grandfather! Your love is our guiding star. Celebrate your special day with joy! 🎉❤️"
  },
  {
    id: 44,
    content:
      "To my wonderful grandfather, happy birthday! Your strength and wisdom are an inspiration. Enjoy every moment today! 🎂💖"
  },
  {
    id: 45,
    content:
      "Happy Birthday to my incredible grandfather! Your joy fills our hearts. May your birthday be as wonderful as you are! 🎈💙"
  },
  {
    id: 46,
    content:
      "To my cherished grandfather, happy birthday! Your kindness and love make the world brighter. Celebrate big today! 🎉❤️"
  },
  {
    id: 47,
    content:
      "Happy Birthday, dear grandfather! Your spirit lights up our lives. May this year be filled with beautiful memories! 🎂💖"
  },
  {
    id: 48,
    content:
      "To my remarkable grandfather, happy birthday! Your love is a treasure. Enjoy your special day surrounded by family! 🎈💙"
  },
  {
    id: 49,
    content:
      "Happy Birthday to my beloved grandfather! Your laughter and wisdom enrich our lives. Celebrate your day with joy! 🎉❤️"
  },
  {
    id: 50,
    content:
      "To my amazing grandfather, happy birthday! Your heart is full of love. May this year bring you all the happiness you deserve! 🎂💖"
  },
  {
    id: 51,
    content:
      "Happy Birthday, dear grandfather! Your kindness is a gift to our family. Enjoy a year filled with laughter and joy! 🎈💙"
  },
  {
    id: 52,
    content:
      "To my wonderful grandfather, happy birthday! Your spirit inspires us every day. Wishing you a fantastic celebration! 🎉❤️"
  },
  {
    id: 53,
    content:
      "Happy Birthday to my incredible grandfather! Your love and wisdom guide us through life. May your day be as special as you are! 🎂💖"
  },
  {
    id: 54,
    content:
      "To my cherished grandfather, happy birthday! Your stories bring us together. Enjoy your special day surrounded by loved ones! 🎈💙"
  },
  {
    id: 55,
    content:
      "Happy Birthday, dear grandfather! Your laughter brightens our days. May this year bring you all the joy you give to us! 🎉❤️"
  },
  {
    id: 56,
    content:
      "To my remarkable grandfather, happy birthday! Your love fills our hearts with warmth. Celebrate your day to the fullest! 🎂💖"
  },
  {
    id: 57,
    content:
      "Happy Birthday to my beloved grandfather! Your wisdom is our guiding light. May your year be filled with happiness! 🎈💙"
  },
  {
    id: 58,
    content:
      "To my amazing grandfather, happy birthday! Your heart is full of kindness. Enjoy your special day with family and friends! 🎉❤️"
  },
  {
    id: 59,
    content:
      "Happy Birthday, dear grandfather! Your spirit is unbreakable. May this year bring you countless blessings! 🎂💖"
  },
  {
    id: 60,
    content:
      "To my wonderful grandfather, happy birthday! Your love is a treasure beyond measure. Celebrate your day with joy! 🎈💙"
  },
  {
    id: 61,
    content:
      "Happy Birthday to my incredible grandfather! Your laughter is our favorite melody. Wishing you a fantastic year ahead! 🎉❤️"
  },
  {
    id: 62,
    content:
      "To my cherished grandfather, happy birthday! Your kindness is felt by all. May your day be filled with love and happiness! 🎂💖"
  },
  {
    id: 63,
    content:
      "Happy Birthday, dear grandfather! Your presence is a gift we cherish. Enjoy your special day surrounded by family! 🎈💙"
  },
  {
    id: 64,
    content:
      "To my remarkable grandfather, happy birthday! Your wisdom is a guiding star in our lives. Celebrate your day with joy! 🎉❤️"
  },
  {
    id: 65,
    content:
      "Happy Birthday to my beloved grandfather! Your heart is filled with love. May this year bring you endless joy! 🎂💖"
  },
  {
    id: 66,
    content:
      "To my amazing grandfather, happy birthday! Your spirit is contagious. Wishing you a day filled with wonderful surprises! 🎈💙"
  },
  {
    id: 67,
    content:
      "Happy Birthday, dear grandfather! Your laughter is our greatest treasure. May your birthday be as bright as your spirit! 🎉❤️"
  },
  {
    id: 68,
    content:
      "To my wonderful grandfather, happy birthday! Your love inspires us every day. Enjoy your special day to the fullest! 🎂💖"
  },
  {
    id: 69,
    content:
      "Happy Birthday to my incredible grandfather! Your stories make our family rich. Celebrate your day with love and laughter! 🎈💙"
  },
  {
    id: 70,
    content:
      "To my cherished grandfather, happy birthday! Your kindness knows no bounds. May this year bring you all the happiness you deserve! 🎉❤️"
  },
  {
    id: 71,
    content:
      "Happy Birthday, dear grandfather! Your spirit is a blessing. Enjoy a year filled with beautiful moments! 🎂💖"
  },
  {
    id: 72,
    content:
      "To my remarkable grandfather, happy birthday! Your love lights up our lives. Celebrate your special day with joy! 🎈💙"
  },
  {
    id: 73,
    content:
      "Happy Birthday to my beloved grandfather! Your laughter fills our hearts with joy. May this year be filled with blessings! 🎉❤️"
  },
  {
    id: 74,
    content:
      "To my amazing grandfather, happy birthday! Your stories connect us. Wishing you a fantastic celebration! 🎂💖"
  },
  {
    id: 75,
    content:
      "Happy Birthday, dear grandfather! Your wisdom is invaluable. Enjoy your day surrounded by family and love! 🎈💙"
  },
  {
    id: 76,
    content:
      "To my wonderful grandfather, happy birthday! Your kindness and strength are an inspiration. Celebrate big today! 🎉❤️"
  },
  {
    id: 77,
    content:
      "Happy Birthday to my incredible grandfather! Your love fills our hearts with happiness. May your birthday be as special as you are! 🎂💖"
  },
  {
    id: 78,
    content:
      "To my cherished grandfather, happy birthday! Your spirit is bright. Enjoy your special day surrounded by those who love you! 🎈💙"
  },
  {
    id: 79,
    content:
      "Happy Birthday, dear grandfather! Your laughter is a gift we treasure. May this year bring you all the joy you give us! 🎉❤️"
  },
  {
    id: 80,
    content:
      "To my remarkable grandfather, happy birthday! Your kindness and love enrich our lives. Celebrate your day with joy! 🎂💖"
  },
  {
    id: 81,
    content:
      "Happy Birthday to my beloved grandfather! Your stories are our history. May your birthday be filled with beautiful moments! 🎈💙"
  },
  {
    id: 82,
    content:
      "To my amazing grandfather, happy birthday! Your spirit is a blessing to us all. Wishing you a fantastic year ahead! 🎉❤️"
  },
  {
    id: 83,
    content:
      "Happy Birthday, dear grandfather! Your love is a light in our lives. Enjoy your special day surrounded by family! 🎂💖"
  },
  {
    id: 84,
    content:
      "To my wonderful grandfather, happy birthday! Your laughter brings us all together. May this year be your best yet! 🎈💙"
  },
  {
    id: 85,
    content:
      "Happy Birthday to my incredible grandfather! Your wisdom guides our way. Celebrate your day with joy and happiness! 🎉❤️"
  },
  {
    id: 86,
    content:
      "To my cherished grandfather, happy birthday! Your kindness makes the world a better place. Enjoy your special day! 🎂💖"
  },
  {
    id: 87,
    content:
      "Happy Birthday, dear grandfather! Your spirit is unbreakable. May this year bring you countless blessings! 🎈💙"
  },
  {
    id: 88,
    content:
      "To my remarkable grandfather, happy birthday! Your love is a treasure we hold dear. Celebrate your day with joy! 🎉❤️"
  },
  {
    id: 89,
    content:
      "Happy Birthday to my beloved grandfather! Your stories make our family rich. May your birthday be filled with laughter and joy! 🎂💖"
  },
  {
    id: 90,
    content:
      "To my amazing grandfather, happy birthday! Your heart is full of love and warmth. Enjoy your special day surrounded by family! 🎈💙"
  },
  {
    id: 91,
    content:
      "Happy Birthday, dear grandfather! Your laughter is the best gift. Wishing you a year filled with happiness and blessings! 🎉❤️"
  },
  {
    id: 92,
    content:
      "To my wonderful grandfather, happy birthday! Your spirit inspires us all. May your special day be filled with love! 🎂💖"
  },
  {
    id: 93,
    content:
      "Happy Birthday to my incredible grandfather! Your wisdom enriches our lives. Celebrate your day with joy and laughter! 🎈💙"
  },
  {
    id: 94,
    content:
      "To my cherished grandfather, happy birthday! Your love is a blessing. Wishing you a fantastic celebration filled with happiness! 🎉❤️"
  },
  {
    id: 95,
    content:
      "Happy Birthday, dear grandfather! Your kindness is a gift to our family. May your year be filled with beautiful moments! 🎂💖"
  },
  {
    id: 96,
    content:
      "To my remarkable grandfather, happy birthday! Your love lights up our lives. Enjoy your special day surrounded by family! 🎈💙"
  },
  {
    id: 97,
    content:
      "Happy Birthday to my beloved grandfather! Your laughter fills our hearts with joy. May this year be your best one yet! 🎉❤️"
  },
  {
    id: 98,
    content:
      "To my amazing grandfather, happy birthday! Your spirit is contagious. Wishing you a day filled with wonderful surprises! 🎂💖"
  },
  {
    id: 99,
    content:
      "Happy Birthday, dear grandfather! Your presence is a gift we cherish. Enjoy your special day surrounded by love! 🎈💙"
  },
  {
    id: 100,
    content:
      "To my wonderful grandfather, happy birthday! Your kindness and strength inspire us all. Celebrate big today! 🎉❤️"
  }
];

const grandMother = [
  {
    id: 1,
    content:
      "Happy Birthday to my dearest grandmother! Your love and wisdom light up our lives. May your special day be filled with joy and happiness! 🎉❤️"
  },
  {
    id: 2,
    content:
      "To my wonderful grandmother, happy birthday! Your kindness and warmth make the world a better place. Wishing you a day filled with love and laughter! 🎂💖"
  },
  {
    id: 3,
    content:
      "Happy Birthday, dear grandmother! Your stories and hugs are treasures we cherish. May your day be as beautiful as your heart! 🎈💙"
  },
  {
    id: 4,
    content:
      "To my amazing grandmother, happy birthday! Your spirit and strength inspire us all. Celebrate your special day with joy and love! 🎉❤️"
  },
  {
    id: 5,
    content:
      "Happy Birthday to my beloved grandmother! Your laughter is music to our ears. May this year bring you endless happiness and cherished moments! 🎂💖"
  },
  {
    id: 6,
    content:
      "To my cherished grandmother, happy birthday! Your wisdom is our guiding light. Wishing you a day filled with sweet surprises! 🎈💙"
  },
  {
    id: 7,
    content:
      "Happy Birthday, dear grandmother! Your love is the heart of our family. Enjoy your special day surrounded by those who adore you! 🎉❤️"
  },
  {
    id: 8,
    content:
      "To my remarkable grandmother, happy birthday! Your kindness touches everyone around you. May your day be filled with joy and laughter! 🎂💖"
  },
  {
    id: 9,
    content:
      "Happy Birthday to my incredible grandmother! Your spirit shines brightly in our lives. May your special day be as wonderful as you are! 🎈💙"
  },
  {
    id: 10,
    content:
      "To my amazing grandmother, happy birthday! Your love is a gift we treasure. Wishing you a day filled with happiness and joy! 🎉❤️"
  },
  {
    id: 11,
    content:
      "Happy Birthday, dear grandmother! Your strength and love inspire us all. Celebrate your day with laughter and joy! 🎂💖"
  },
  {
    id: 12,
    content:
      "To my wonderful grandmother, happy birthday! Your heart is as big as the ocean. May this year bring you endless blessings! 🎈💙"
  },
  {
    id: 13,
    content:
      "Happy Birthday to my beloved grandmother! Your stories enrich our lives. May your day be filled with beautiful moments! 🎉❤️"
  },
  {
    id: 14,
    content:
      "To my cherished grandmother, happy birthday! Your love is a treasure we hold dear. Enjoy your special day with family! 🎂💖"
  },
  {
    id: 15,
    content:
      "Happy Birthday, dear grandmother! Your laughter brings us all together. May your birthday be as joyful as you make us feel! 🎈💙"
  },
  {
    id: 16,
    content:
      "To my remarkable grandmother, happy birthday! Your kindness is a blessing. Wishing you a fantastic day filled with love! 🎉❤️"
  },
  {
    id: 17,
    content:
      "Happy Birthday to my incredible grandmother! Your spirit is an inspiration. Celebrate your day surrounded by those who love you! 🎂💖"
  },
  {
    id: 18,
    content:
      "To my amazing grandmother, happy birthday! Your love fills our hearts with joy. May this year bring you happiness and laughter! 🎈💙"
  },
  {
    id: 19,
    content:
      "Happy Birthday, dear grandmother! Your wisdom is a gift. Enjoy a year filled with beautiful memories and moments! 🎉❤️"
  },
  {
    id: 20,
    content:
      "To my wonderful grandmother, happy birthday! Your love is our greatest treasure. Celebrate your special day with joy and laughter! 🎂💖"
  },
  {
    id: 21,
    content:
      "Happy Birthday to my beloved grandmother! Your kindness and strength are a blessing. May this year be filled with joy! 🎈💙"
  },
  {
    id: 22,
    content:
      "To my cherished grandmother, happy birthday! Your stories are our legacy. Wishing you a day as special as you are! 🎉❤️"
  },
  {
    id: 23,
    content:
      "Happy Birthday, dear grandmother! Your love lights up our lives. May your special day be filled with warmth and happiness! 🎂💖"
  },
  {
    id: 24,
    content:
      "To my remarkable grandmother, happy birthday! Your laughter is a melody we cherish. Enjoy your day to the fullest! 🎈💙"
  },
  {
    id: 25,
    content:
      "Happy Birthday to my incredible grandmother! Your wisdom guides us all. May this year bring you endless blessings! 🎉❤️"
  },
  {
    id: 26,
    content:
      "To my amazing grandmother, happy birthday! Your love and kindness inspire us. Wishing you a fantastic day filled with joy! 🎂💖"
  },
  {
    id: 27,
    content:
      "Happy Birthday, dear grandmother! Your presence is a gift we treasure. May your day be as beautiful as your heart! 🎈💙"
  },
  {
    id: 28,
    content:
      "To my wonderful grandmother, happy birthday! Your spirit is unbreakable. Celebrate your special day surrounded by love! 🎉❤️"
  },
  {
    id: 29,
    content:
      "Happy Birthday to my beloved grandmother! Your laughter brightens our lives. May this year be filled with joy and love! 🎂💖"
  },
  {
    id: 30,
    content:
      "To my cherished grandmother, happy birthday! Your kindness enriches our lives. Enjoy your special day surrounded by family! 🎈💙"
  },
  {
    id: 31,
    content:
      "Happy Birthday, dear grandmother! Your wisdom is a guiding light. Wishing you a day filled with happiness and joy! 🎉❤️"
  },
  {
    id: 32,
    content:
      "To my remarkable grandmother, happy birthday! Your love is our greatest blessing. Celebrate your day with joy and laughter! 🎂💖"
  },
  {
    id: 33,
    content:
      "Happy Birthday to my incredible grandmother! Your spirit is a gift to us all. May your birthday be as wonderful as you are! 🎈💙"
  },
  {
    id: 34,
    content:
      "To my amazing grandmother, happy birthday! Your kindness and love inspire us every day. Enjoy your special day! 🎉❤️"
  },
  {
    id: 35,
    content:
      "Happy Birthday, dear grandmother! Your love fills our hearts with warmth. May this year bring you joy and blessings! 🎂💖"
  },
  {
    id: 36,
    content:
      "To my wonderful grandmother, happy birthday! Your laughter is the sweetest melody. Celebrate your day surrounded by family! 🎈💙"
  },
  {
    id: 37,
    content:
      "Happy Birthday to my beloved grandmother! Your stories make our family rich. Wishing you a fantastic celebration! 🎉❤️"
  },
  {
    id: 38,
    content:
      "To my cherished grandmother, happy birthday! Your love is a treasure we hold dear. May your day be filled with joy! 🎂💖"
  },
  {
    id: 39,
    content:
      "Happy Birthday, dear grandmother! Your spirit shines brightly in our lives. Enjoy a year filled with beautiful moments! 🎈💙"
  },
  {
    id: 40,
    content:
      "To my remarkable grandmother, happy birthday! Your kindness touches everyone around you. Celebrate your special day with joy! 🎉❤️"
  },
  {
    id: 41,
    content:
      "Happy Birthday to my incredible grandmother! Your love and wisdom enrich our lives. May your birthday be filled with happiness! 🎂💖"
  },
  {
    id: 42,
    content:
      "To my amazing grandmother, happy birthday! Your spirit is contagious. Wishing you a day filled with wonderful surprises! 🎈💙"
  },
  {
    id: 43,
    content:
      "Happy Birthday, dear grandmother! Your laughter fills our hearts with joy. May this year bring you all the blessings you deserve! 🎉❤️"
  },
  {
    id: 44,
    content:
      "To my wonderful grandmother, happy birthday! Your love is a light in our lives. Celebrate your special day surrounded by family! 🎂💖"
  },
  {
    id: 45,
    content:
      "Happy Birthday to my beloved grandmother! Your kindness and strength are an inspiration. Enjoy a year filled with joy! 🎈💙"
  },
  {
    id: 46,
    content:
      "To my cherished grandmother, happy birthday! Your stories are our legacy. Wishing you a day as special as you are! 🎉❤️"
  },
  {
    id: 47,
    content:
      "Happy Birthday, dear grandmother! Your love lights up our lives. May your special day be filled with warmth and happiness! 🎂💖"
  },
  {
    id: 48,
    content:
      "To my remarkable grandmother, happy birthday! Your laughter is a melody we cherish. Enjoy your day to the fullest! 🎈💙"
  },
  {
    id: 49,
    content:
      "Happy Birthday to my incredible grandmother! Your wisdom guides us all. May this year bring you endless blessings! 🎉❤️"
  },
  {
    id: 50,
    content:
      "To my amazing grandmother, happy birthday! Your love and kindness inspire us. Wishing you a fantastic day filled with joy! 🎂💖"
  },
  {
    id: 51,
    content:
      "Happy Birthday, dear grandmother! Your presence is a gift we treasure. May your day be as beautiful as your heart! 🎈💙"
  },
  {
    id: 52,
    content:
      "To my wonderful grandmother, happy birthday! Your spirit is unbreakable. Celebrate your special day surrounded by love! 🎉❤️"
  },
  {
    id: 53,
    content:
      "Happy Birthday to my beloved grandmother! Your laughter brightens our lives. May this year be filled with joy and love! 🎂💖"
  },
  {
    id: 54,
    content:
      "To my cherished grandmother, happy birthday! Your kindness enriches our lives. Enjoy your special day surrounded by family! 🎈💙"
  },
  {
    id: 55,
    content:
      "Happy Birthday, dear grandmother! Your wisdom is a guiding light. Wishing you a day filled with happiness and joy! 🎉❤️"
  },
  {
    id: 56,
    content:
      "To my remarkable grandmother, happy birthday! Your love is our greatest blessing. Celebrate your day with joy and laughter! 🎂💖"
  },
  {
    id: 57,
    content:
      "Happy Birthday to my incredible grandmother! Your spirit is a gift to us all. May your birthday be as wonderful as you are! 🎈💙"
  },
  {
    id: 58,
    content:
      "To my amazing grandmother, happy birthday! Your kindness and love inspire us every day. Enjoy your special day! 🎉❤️"
  },
  {
    id: 59,
    content:
      "Happy Birthday, dear grandmother! Your love fills our hearts with warmth. May this year bring you joy and blessings! 🎂💖"
  },
  {
    id: 60,
    content:
      "To my wonderful grandmother, happy birthday! Your laughter is the sweetest melody. Celebrate your day surrounded by family! 🎈💙"
  },
  {
    id: 61,
    content:
      "Happy Birthday to my beloved grandmother! Your stories make our family rich. Wishing you a fantastic celebration! 🎉❤️"
  },
  {
    id: 62,
    content:
      "To my cherished grandmother, happy birthday! Your love is a treasure we hold dear. May your day be filled with joy! 🎂💖"
  },
  {
    id: 63,
    content:
      "Happy Birthday, dear grandmother! Your spirit shines brightly in our lives. Enjoy a year filled with beautiful moments! 🎈💙"
  },
  {
    id: 64,
    content:
      "To my remarkable grandmother, happy birthday! Your kindness touches everyone around you. Celebrate your special day with joy! 🎉❤️"
  },
  {
    id: 65,
    content:
      "Happy Birthday to my incredible grandmother! Your love and wisdom enrich our lives. May your birthday be filled with happiness! 🎂💖"
  },
  {
    id: 66,
    content:
      "To my amazing grandmother, happy birthday! Your spirit is contagious. Wishing you a day filled with wonderful surprises! 🎈💙"
  },
  {
    id: 67,
    content:
      "Happy Birthday, dear grandmother! Your laughter fills our hearts with joy. May this year bring you all the blessings you deserve! 🎉❤️"
  },
  {
    id: 68,
    content:
      "To my wonderful grandmother, happy birthday! Your love is a light in our lives. Celebrate your special day surrounded by family! 🎂💖"
  },
  {
    id: 69,
    content:
      "Happy Birthday to my beloved grandmother! Your kindness and strength are an inspiration. Enjoy a year filled with joy! 🎈💙"
  },
  {
    id: 70,
    content:
      "To my cherished grandmother, happy birthday! Your stories are our legacy. Wishing you a day as special as you are! 🎉❤️"
  },
  {
    id: 71,
    content:
      "Happy Birthday, dear grandmother! Your love lights up our lives. May your special day be filled with warmth and happiness! 🎂💖"
  },
  {
    id: 72,
    content:
      "To my remarkable grandmother, happy birthday! Your laughter is a melody we cherish. Enjoy your day to the fullest! 🎈💙"
  },
  {
    id: 73,
    content:
      "Happy Birthday to my incredible grandmother! Your wisdom guides us all. May this year bring you endless blessings! 🎉❤️"
  },
  {
    id: 74,
    content:
      "To my amazing grandmother, happy birthday! Your love and kindness inspire us. Wishing you a fantastic day filled with joy! 🎂💖"
  },
  {
    id: 75,
    content:
      "Happy Birthday, dear grandmother! Your presence is a gift we treasure. May your day be as beautiful as your heart! 🎈💙"
  },
  {
    id: 76,
    content:
      "To my wonderful grandmother, happy birthday! Your spirit is unbreakable. Celebrate your special day surrounded by love! 🎉❤️"
  },
  {
    id: 77,
    content:
      "Happy Birthday to my beloved grandmother! Your laughter brightens our lives. May this year be filled with joy and love! 🎂💖"
  },
  {
    id: 78,
    content:
      "To my cherished grandmother, happy birthday! Your kindness enriches our lives. Enjoy your special day surrounded by family! 🎈💙"
  },
  {
    id: 79,
    content:
      "Happy Birthday, dear grandmother! Your wisdom is a guiding light. Wishing you a day filled with happiness and joy! 🎉❤️"
  },
  {
    id: 80,
    content:
      "To my remarkable grandmother, happy birthday! Your love is our greatest blessing. Celebrate your day with joy and laughter! 🎂💖"
  },
  {
    id: 81,
    content:
      "Happy Birthday to my incredible grandmother! Your spirit is a gift to us all. May your birthday be as wonderful as you are! 🎈💙"
  },
  {
    id: 82,
    content:
      "To my amazing grandmother, happy birthday! Your kindness and love inspire us every day. Enjoy your special day! 🎉❤️"
  },
  {
    id: 83,
    content:
      "Happy Birthday, dear grandmother! Your love fills our hearts with warmth. May this year bring you joy and blessings! 🎂💖"
  },
  {
    id: 84,
    content:
      "To my wonderful grandmother, happy birthday! Your laughter is the sweetest melody. Celebrate your day surrounded by family! 🎈💙"
  },
  {
    id: 85,
    content:
      "Happy Birthday to my beloved grandmother! Your stories make our family rich. Wishing you a fantastic celebration! 🎉❤️"
  },
  {
    id: 86,
    content:
      "To my cherished grandmother, happy birthday! Your love is a treasure we hold dear. May your day be filled with joy! 🎂💖"
  },
  {
    id: 87,
    content:
      "Happy Birthday, dear grandmother! Your spirit shines brightly in our lives. Enjoy a year filled with beautiful moments! 🎈💙"
  },
  {
    id: 88,
    content:
      "To my remarkable grandmother, happy birthday! Your kindness touches everyone around you. Celebrate your special day with joy! 🎉❤️"
  },
  {
    id: 89,
    content:
      "Happy Birthday to my incredible grandmother! Your love and wisdom enrich our lives. May your birthday be filled with happiness! 🎂💖"
  },
  {
    id: 90,
    content:
      "To my amazing grandmother, happy birthday! Your spirit is contagious. Wishing you a day filled with wonderful surprises! 🎈💙"
  },
  {
    id: 91,
    content:
      "Happy Birthday, dear grandmother! Your laughter fills our hearts with joy. May this year bring you all the blessings you deserve! 🎉❤️"
  },
  {
    id: 92,
    content:
      "To my wonderful grandmother, happy birthday! Your love is a light in our lives. Celebrate your special day surrounded by family! 🎂💖"
  },
  {
    id: 93,
    content:
      "Happy Birthday to my beloved grandmother! Your kindness and strength are an inspiration. Enjoy a year filled with joy! 🎈💙"
  },
  {
    id: 94,
    content:
      "To my cherished grandmother, happy birthday! Your stories are our legacy. Wishing you a day as special as you are! 🎉❤️"
  },
  {
    id: 95,
    content:
      "Happy Birthday, dear grandmother! Your love lights up our lives. May your special day be filled with warmth and happiness! 🎂💖"
  },
  {
    id: 96,
    content:
      "To my remarkable grandmother, happy birthday! Your laughter is a melody we cherish. Enjoy your day to the fullest! 🎈💙"
  },
  {
    id: 97,
    content:
      "Happy Birthday to my incredible grandmother! Your wisdom guides us all. May this year bring you endless blessings! 🎉❤️"
  },
  {
    id: 98,
    content:
      "To my amazing grandmother, happy birthday! Your love and kindness inspire us. Wishing you a fantastic day filled with joy! 🎂💖"
  },
  {
    id: 99,
    content:
      "Happy Birthday, dear grandmother! Your presence is a gift we treasure. May your day be as beautiful as your heart! 🎈💙"
  },
  {
    id: 100,
    content:
      "To my wonderful grandmother, happy birthday! Your spirit is unbreakable. Celebrate your special day surrounded by love! 🎉❤️"
  }
];

const godFather = [
  {
    id: 1,
    content:
      "Happy birthday to my incredible godfather! Your wisdom and kindness have been guiding lights in my life. May this year bring you as much joy as you've given to those around you. I hope your day is filled with laughter, love, and all your favorite things!"
  },
  {
    id: 2,
    content:
      "To my dear godfather, on this special day, I want you to know how much you mean to me. Your support and love have shaped my life in ways I can never fully express. I wish you a birthday overflowing with happiness and surrounded by loved ones!"
  },
  {
    id: 3,
    content:
      "Happy birthday, godfather! Your life is a testament to strength, compassion, and dedication. I hope your special day is as amazing as you are, filled with unforgettable moments and cherished memories."
  },
  {
    id: 4,
    content:
      "Wishing a fantastic birthday to my beloved godfather! Your presence in my life is a true blessing. May this year grant you all the happiness you bring to others, and may your dreams come true!"
  },
  {
    id: 5,
    content:
      "Dear godfather, your guidance has been invaluable, and your love unmeasurable. On your birthday, I wish you all the joy and happiness you deserve. Thank you for being such a wonderful influence in my life!"
  },
  {
    id: 6,
    content:
      "Happy birthday to the best godfather anyone could ask for! Your generosity and spirit inspire everyone around you. May your birthday be filled with laughter, fun, and the company of those who love you most!"
  },
  {
    id: 7,
    content:
      "To my amazing godfather, happy birthday! You have always been there for me, offering wisdom and support. I hope your day is filled with all the things that make you smile. You deserve it!"
  },
  {
    id: 8,
    content:
      "On your special day, godfather, I want you to know how much you are loved and appreciated. Your strength and kindness have made a significant impact on my life. Happy birthday! May this year be your best yet!"
  },
  {
    id: 9,
    content:
      "Happy birthday, dear godfather! Your heart is as big as your dreams, and your kindness knows no bounds. May this birthday bring you endless joy and everything you've ever wished for."
  },
  {
    id: 10,
    content:
      "Wishing a very happy birthday to my godfather! Your spirit and love have touched so many lives, and I am grateful for every moment we've shared. May your day be filled with laughter, love, and all your favorite things!"
  },
  {
    id: 11,
    content:
      "Dear godfather, happy birthday! You are a beacon of light in my life, always guiding me with your wisdom. May your special day be filled with all the joy and happiness you bring to others!"
  },
  {
    id: 12,
    content:
      "To my beloved godfather, on your birthday, I celebrate you! Your strength and love are unmatched, and I hope your day is as wonderful as you are. May all your dreams come true this year!"
  },
  {
    id: 13,
    content:
      "Happy birthday to the best godfather! Your love and support mean the world to me. I wish you a day filled with love, laughter, and everything that brings you happiness!"
  },
  {
    id: 14,
    content:
      "Dear godfather, your wisdom and guidance have been a gift in my life. On your special day, I wish you nothing but joy and success. Happy birthday! You deserve all the happiness in the world."
  },
  {
    id: 15,
    content:
      "Wishing you a fabulous birthday, godfather! Your kindness and generosity have touched countless lives. May this year bring you all the joy you bring to others. Have a fantastic day!"
  },
  {
    id: 16,
    content:
      "Happy birthday, dear godfather! You have always been a source of inspiration and strength in my life. May your birthday be filled with all the love and joy you give to others."
  },
  {
    id: 17,
    content:
      "To my wonderful godfather, happy birthday! Your presence in my life is a true blessing. May this year be filled with love, happiness, and unforgettable memories."
  },
  {
    id: 18,
    content:
      "Dear godfather, on your special day, I want you to know how much you mean to me. Your love and support have shaped who I am today. Happy birthday! Enjoy every moment of this day."
  },
  {
    id: 19,
    content:
      "Wishing a very happy birthday to my incredible godfather! Your strength and kindness inspire everyone around you. May your day be filled with laughter, joy, and all your favorite things!"
  },
  {
    id: 20,
    content:
      "Happy birthday to my amazing godfather! Your love has been a guiding light in my life. May this year bring you as much happiness as you have given to those around you!"
  },
  {
    id: 21,
    content:
      "Happy birthday, godfather! Your love and support have been a guiding force in my life. May your special day be filled with all the joy you give to others, and may this year be your best yet!"
  },
  {
    id: 22,
    content:
      "To my dearest godfather, on your birthday, I celebrate you! Your strength and kindness inspire me every day. May this year bring you all the happiness your heart can hold. Enjoy your special day!"
  },
  {
    id: 23,
    content:
      "Wishing a fantastic birthday to my beloved godfather! Your presence in my life is a true blessing. May your day be filled with love, laughter, and all the things that make you smile!"
  },
  {
    id: 24,
    content:
      "Happy birthday, dear godfather! Your wisdom and guidance have shaped my life in so many ways. I hope your special day is filled with all the love and joy you deserve."
  },
  {
    id: 25,
    content:
      "To my amazing godfather, happy birthday! Your kindness and spirit touch everyone around you. May your birthday be filled with laughter, fun, and the company of loved ones."
  },
  {
    id: 26,
    content:
      "Dear godfather, on your special day, I want you to know how much I appreciate you. Your support has been invaluable, and I hope your birthday is filled with all the things that make you happy!"
  },
  {
    id: 27,
    content:
      "Happy birthday to the best godfather anyone could ask for! Your generosity and love are unmatched. May your day be filled with joy, surrounded by those who cherish you."
  },
  {
    id: 28,
    content:
      "To my wonderful godfather, happy birthday! Your love has been a beacon of hope in my life. May your day be as special as you are, filled with laughter and joy."
  },
  {
    id: 29,
    content:
      "Wishing a very happy birthday to my dear godfather! Your heart is as big as your dreams, and your kindness knows no bounds. May this year be your best one yet!"
  },
  {
    id: 30,
    content:
      "Happy birthday, godfather! You have always been my role model, showing me the true meaning of strength and love. May your special day be filled with all the joy you bring to others."
  },
  {
    id: 31,
    content:
      "Dear godfather, today we celebrate you! Your love and support have been a guiding light in my life. May this birthday bring you endless joy and everything you've ever wished for."
  },
  {
    id: 32,
    content:
      "Happy birthday to my incredible godfather! Your wisdom and kindness have touched so many lives. May your day be filled with happiness and surrounded by the people you love."
  },
  {
    id: 33,
    content:
      "To my beloved godfather, on this special day, I want to express my gratitude for all you do. May your birthday be as amazing as you are, filled with joy and cherished moments."
  },
  {
    id: 34,
    content:
      "Wishing you a fabulous birthday, godfather! Your spirit and love have made a significant impact on my life. May this year be filled with all the things that bring you happiness."
  },
  {
    id: 35,
    content:
      "Happy birthday, dear godfather! Your heart is full of love, and your spirit shines brightly. May this birthday be a reflection of all the joy you bring to the world."
  },
  {
    id: 36,
    content:
      "To my amazing godfather, happy birthday! You have always been there for me, offering wisdom and support. I hope your day is filled with love, laughter, and everything you desire."
  },
  {
    id: 37,
    content:
      "On your special day, godfather, I want you to know how much you are appreciated. Your kindness and generosity have touched countless lives. Happy birthday! Enjoy every moment of this day."
  },
  {
    id: 38,
    content:
      "Wishing a very happy birthday to my godfather! Your love and support have shaped who I am today. May your day be filled with joy, laughter, and all the things that bring you happiness."
  },
  {
    id: 39,
    content:
      "Happy birthday to my dear godfather! Your presence in my life is a true blessing. May this year grant you all the happiness you bring to others, and may your dreams come true!"
  },
  {
    id: 40,
    content:
      "To my wonderful godfather, on your birthday, I wish you all the love and happiness in the world. You have always been my inspiration. May this year be filled with amazing adventures and beautiful moments!"
  },
  {
    id: 41,
    content:
      "Dear godfather, happy birthday! Your kindness and strength are unparalleled. May your special day be filled with laughter, love, and the company of good friends and family."
  },
  {
    id: 42,
    content:
      "Happy birthday to my amazing godfather! Your love and guidance have shaped my life in incredible ways. May your day be filled with all the things that make you smile."
  },
  {
    id: 43,
    content:
      "To my beloved godfather, on your birthday, I celebrate you! Your strength and wisdom inspire me every day. May this year bring you as much happiness as you give to others!"
  },
  {
    id: 44,
    content:
      "Wishing you a fantastic birthday, godfather! Your generosity and spirit inspire everyone around you. May this year bring you all the joy you deserve."
  },
  {
    id: 45,
    content:
      "Happy birthday, dear godfather! Your love has been a guiding light in my life. May this special day be filled with joy, laughter, and the warmth of those you love."
  },
  {
    id: 46,
    content:
      "To my wonderful godfather, happy birthday! Your presence in my life is a true blessing. May your day be filled with laughter, love, and all the things that make you happy."
  },
  {
    id: 47,
    content:
      "Dear godfather, on your special day, I want you to know how much you mean to me. Your love and support have been a source of strength in my life. Happy birthday! Enjoy every moment."
  },
  {
    id: 48,
    content:
      "Wishing a very happy birthday to my incredible godfather! Your kindness and wisdom have touched many lives. May your birthday be filled with joy, laughter, and all your favorite things."
  },
  {
    id: 49,
    content:
      "Happy birthday, dear godfather! You are a source of inspiration and love. May this year be filled with wonderful moments and cherished memories."
  },
  {
    id: 50,
    content:
      "To my amazing godfather, happy birthday! Your heart is full of love, and your spirit shines brightly. May your day be as special as you are, filled with joy and happiness!"
  },
  {
    id: 51,
    content:
      "Happy birthday, dear godfather! Your love and support mean the world to me. May your birthday be filled with laughter, love, and all your favorite things!"
  },
  {
    id: 52,
    content:
      "To my wonderful godfather, happy birthday! Your presence in my life is a true blessing. May your day be filled with joy and all the things you love!"
  },
  {
    id: 53,
    content:
      "Wishing you a fabulous birthday, godfather! Your kindness and wisdom inspire me every day. May this year be filled with happiness and cherished moments."
  },
  {
    id: 54,
    content:
      "Happy birthday to my incredible godfather! Your guidance has been a source of strength in my life. May your special day be filled with love and joy."
  },
  {
    id: 55,
    content:
      "To my beloved godfather, on your birthday, I celebrate you! Your strength and kindness have made a significant impact on my life. May this year bring you all the joy you deserve!"
  },
  {
    id: 56,
    content:
      "Happy birthday, dear godfather! Your love and support have always been there for me. May your day be filled with laughter, happiness, and everything you love!"
  },
  {
    id: 57,
    content:
      "Wishing a very happy birthday to my amazing godfather! Your presence in my life has been a true blessing. May this year be filled with joy and wonderful moments!"
  },
  {
    id: 58,
    content:
      "Happy birthday to the best godfather anyone could ask for! Your love has been a guiding light in my life. May your special day be filled with all the joy you give to others!"
  },
  {
    id: 59,
    content:
      "To my wonderful godfather, happy birthday! Your kindness and generosity have touched so many lives. May your birthday be filled with love and laughter."
  },
  {
    id: 60,
    content:
      "Dear godfather, on your special day, I want you to know how much I appreciate you. Your support has been invaluable, and I hope your birthday is filled with joy!"
  },
  {
    id: 61,
    content:
      "Happy birthday, dear godfather! Your strength and kindness inspire everyone around you. May your day be as amazing as you are!"
  },
  {
    id: 62,
    content:
      "Wishing a fantastic birthday to my beloved godfather! Your love and support have shaped my life in incredible ways. May your day be filled with joy and laughter."
  },
  {
    id: 63,
    content:
      "To my amazing godfather, happy birthday! Your heart is as big as your dreams, and your kindness knows no bounds. May this year bring you all the happiness you deserve."
  },
  {
    id: 64,
    content:
      "Happy birthday to my incredible godfather! Your wisdom and kindness have been guiding lights in my life. May this year bring you as much joy as you give to others."
  },
  {
    id: 65,
    content:
      "To my beloved godfather, on your birthday, I celebrate you! Your strength and love are unmatched. May this year grant you all the happiness you bring to others."
  },
  {
    id: 66,
    content:
      "Wishing you a fabulous birthday, godfather! Your spirit and love have touched so many lives. May your day be filled with laughter, joy, and everything you cherish."
  },
  {
    id: 67,
    content:
      "Happy birthday, dear godfather! Your heart is full of love, and your spirit shines brightly. May your birthday be a reflection of all the joy you bring to the world."
  },
  {
    id: 68,
    content:
      "To my wonderful godfather, happy birthday! Your love has been a guiding light in my life. May this special day be filled with all the things you enjoy most."
  },
  {
    id: 69,
    content:
      "Dear godfather, on your special day, I want you to know how much you mean to me. Your love and support have shaped who I am today. Happy birthday! Enjoy every moment of this day."
  },
  {
    id: 70,
    content:
      "Wishing a very happy birthday to my incredible godfather! Your kindness and wisdom have made a significant impact on my life. May your birthday be filled with joy and laughter."
  },
  {
    id: 71,
    content:
      "Happy birthday to my dear godfather! Your presence in my life is a true blessing. May this year bring you all the happiness you give to others."
  },
  {
    id: 72,
    content:
      "To my amazing godfather, on your birthday, I wish you all the love and joy in the world. You have always been my inspiration. Enjoy your special day!"
  },
  {
    id: 73,
    content:
      "Dear godfather, happy birthday! Your kindness and strength are unparalleled. May your special day be filled with laughter, love, and the company of good friends."
  },
  {
    id: 74,
    content:
      "Happy birthday to my incredible godfather! Your love and guidance have shaped my life in wonderful ways. May your day be filled with all the joy you bring to others."
  },
  {
    id: 75,
    content:
      "To my beloved godfather, on your birthday, I celebrate you! Your strength and kindness have made a significant impact on my life. May this year bring you all the joy you deserve!"
  },
  {
    id: 76,
    content:
      "Happy birthday, dear godfather! Your love and support have always been there for me. May your day be filled with laughter, happiness, and everything you love!"
  },
  {
    id: 77,
    content:
      "Wishing a very happy birthday to my amazing godfather! Your presence in my life has been a true blessing. May this year be filled with joy and wonderful moments!"
  },
  {
    id: 78,
    content:
      "Happy birthday to the best godfather anyone could ask for! Your love has been a guiding light in my life. May your special day be filled with all the joy you give to others!"
  },
  {
    id: 79,
    content:
      "To my wonderful godfather, happy birthday! Your kindness and generosity have touched so many lives. May your birthday be filled with love and laughter."
  },
  {
    id: 80,
    content:
      "Dear godfather, on your special day, I want you to know how much I appreciate you. Your support has been invaluable, and I hope your birthday is filled with joy!"
  },
  {
    id: 81,
    content:
      "Happy birthday, dear godfather! Your strength and kindness inspire everyone around you. May your day be as amazing as you are!"
  },
  {
    id: 82,
    content:
      "Wishing a fantastic birthday to my beloved godfather! Your love and support have shaped my life in incredible ways. May your day be filled with joy and laughter."
  },
  {
    id: 83,
    content:
      "To my amazing godfather, happy birthday! Your heart is as big as your dreams, and your kindness knows no bounds. May this year bring you all the happiness you deserve."
  },
  {
    id: 84,
    content:
      "Happy birthday to my incredible godfather! Your wisdom and kindness have been guiding lights in my life. May this year bring you as much joy as you give to others."
  },
  {
    id: 85,
    content:
      "To my beloved godfather, on your birthday, I celebrate you! Your strength and love are unmatched. May this year grant you all the happiness you bring to others."
  },
  {
    id: 86,
    content:
      "Wishing you a fabulous birthday, godfather! Your spirit and love have touched so many lives. May your day be filled with laughter, joy, and everything you cherish."
  },
  {
    id: 87,
    content:
      "Happy birthday, dear godfather! Your heart is full of love, and your spirit shines brightly. May your birthday be a reflection of all the joy you bring to the world."
  },
  {
    id: 88,
    content:
      "To my wonderful godfather, happy birthday! Your love has been a guiding light in my life. May this special day be filled with all the things you enjoy most."
  },
  {
    id: 89,
    content:
      "Dear godfather, on your special day, I want you to know how much you mean to me. Your love and support have shaped who I am today. Happy birthday! Enjoy every moment of this day."
  },
  {
    id: 90,
    content:
      "Wishing a very happy birthday to my incredible godfather! Your kindness and wisdom have made a significant impact on my life. May your birthday be filled with joy and laughter."
  },
  {
    id: 91,
    content:
      "Happy birthday to my dear godfather! Your presence in my life is a true blessing. May this year bring you all the happiness you give to others."
  },
  {
    id: 92,
    content:
      "To my amazing godfather, on your birthday, I wish you all the love and joy in the world. You have always been my inspiration. Enjoy your special day!"
  },
  {
    id: 93,
    content:
      "Dear godfather, happy birthday! Your kindness and strength are unparalleled. May your special day be filled with laughter, love, and the company of good friends."
  },
  {
    id: 94,
    content:
      "Happy birthday to my incredible godfather! Your love and guidance have shaped my life in wonderful ways. May your day be filled with all the joy you bring to others."
  },
  {
    id: 95,
    content:
      "To my beloved godfather, on your birthday, I celebrate you! Your strength and kindness have made a significant impact on my life. May this year bring you all the joy you deserve!"
  },
  {
    id: 96,
    content:
      "Happy birthday, dear godfather! Your love and support have always been there for me. May your day be filled with laughter, happiness, and everything you love!"
  },
  {
    id: 97,
    content:
      "Wishing a very happy birthday to my amazing godfather! Your presence in my life has been a true blessing. May this year be filled with joy and wonderful moments!"
  },
  {
    id: 98,
    content:
      "Happy birthday to the best godfather anyone could ask for! Your love has been a guiding light in my life. May your special day be filled with all the joy you give to others!"
  },
  {
    id: 99,
    content:
      "To my wonderful godfather, happy birthday! Your kindness and generosity have touched so many lives. May your birthday be filled with love and laughter."
  },
  {
    id: 100,
    content:
      "Dear godfather, on your special day, I want you to know how much I appreciate you. Your support has been invaluable, and I hope your birthday is filled with joy!"
  }
  // Add more messages as needed to reach 100
];

const cousin = [
  {
    id: 1,
    content:
      "Happy birthday to my awesome cousin! Your energy and enthusiasm are contagious. Have a fantastic day!"
  },
  {
    id: 2,
    content:
      "Wishing you a wonderful birthday, dear cousin! May this year be filled with adventures and happiness."
  },
  {
    id: 3,
    content:
      "Happy birthday to my favorite cousin! Your spirit brings joy to our family gatherings. Enjoy your special day!"
  },
  {
    id: 4,
    content:
      "To my cousin on your birthday: Thank you for being such a fun and loving part of my life. Have an amazing day!"
  },
  {
    id: 5,
    content:
      "Happy birthday, cousin! Your laughter and kindness light up our lives. Wishing you all the best today!"
  },
  {
    id: 6,
    content:
      "Cheers to you on your special day, cousin! May your birthday be filled with love and laughter."
  },
  {
    id: 7,
    content:
      "Happy birthday to my wonderful cousin! Your creativity and spirit inspire me. Enjoy your day to the fullest!"
  },
  {
    id: 8,
    content:
      "To my amazing cousin: Happy birthday! May your year ahead be filled with exciting opportunities."
  },
  {
    id: 9,
    content:
      "Wishing you a fantastic birthday, cousin! Your positivity is infectious. May this year bring you joy!"
  },
  {
    id: 10,
    content:
      "Happy birthday to the coolest cousin ever! Your adventurous nature makes family gatherings so much fun."
  },
  {
    id: 11,
    content:
      "Cheers to my cousin on your birthday! Your unique perspective on life is refreshing. Have an awesome day!"
  },
  {
    id: 12,
    content:
      "Happy birthday, cousin! Your kindness and generosity are unmatched. Wishing you a year full of blessings."
  },
  {
    id: 13,
    content:
      "To my cousin on your special day: Thank you for always being there for me. May your birthday be as wonderful as you are!"
  },
  {
    id: 14,
    content:
      "Wishing you a wonderful birthday, cousin! Your sense of humor brightens our days. Enjoy your celebrations!"
  },
  {
    id: 15,
    content:
      "Happy birthday, dear cousin! Your strength and determination inspire me. May this year be your best one yet!"
  },
  {
    id: 16,
    content:
      "To my cousin: Happy birthday! May your life be filled with love, laughter, and unforgettable moments."
  },
  {
    id: 17,
    content:
      "Cheers to my cousin on your birthday! Your vibrant spirit brings joy to everyone around you."
  },
  {
    id: 18,
    content:
      "Happy birthday to my beloved cousin! Your support means the world to me. Have a fantastic day!"
  },
  {
    id: 19,
    content:
      "Wishing you a fabulous birthday, cousin! Your adventurous spirit is a blessing to our family."
  },
  {
    id: 20,
    content:
      "Happy birthday, cousin! Your laughter fills our lives with joy. May your day be as wonderful as you are!"
  },
  {
    id: 21,
    content:
      "To my cousin on your special day: Your love and friendship are treasures I cherish. Enjoy every moment!"
  },
  {
    id: 22,
    content:
      "Cheers to my cousin on your birthday! Your enthusiasm for life is contagious. Have an amazing day!"
  },
  {
    id: 23,
    content:
      "Happy birthday to my incredible cousin! Your creativity and passion inspire those around you. Enjoy your day!"
  },
  {
    id: 24,
    content:
      "Wishing you a wonderful birthday, cousin! Your unique personality brightens our family gatherings."
  },
  {
    id: 25,
    content:
      "Happy birthday, dear cousin! Your spirit and determination make you truly special. Have an unforgettable day!"
  },
  {
    id: 26,
    content:
      "To my cousin: Happy birthday! May your journey ahead be filled with love, laughter, and joy."
  },
  {
    id: 27,
    content:
      "Cheers to my cousin on your birthday! Your adventurous nature brings excitement to our family."
  },
  {
    id: 28,
    content:
      "Happy birthday to my fabulous cousin! Your kindness and humor light up our lives. Enjoy your special day!"
  },
  {
    id: 29,
    content:
      "Wishing you a fantastic birthday, cousin! Your resilience and positivity inspire everyone you meet."
  },
  {
    id: 30,
    content:
      "Happy birthday, cousin! Your laughter and love are gifts to our family. Have an amazing celebration!"
  },
  {
    id: 31,
    content:
      "To my cousin on your special day: Thank you for being such a wonderful friend. Enjoy every moment!"
  },
  {
    id: 32,
    content:
      "Cheers to my cousin on your birthday! Your adventurous spirit makes every family gathering memorable."
  },
  {
    id: 33,
    content:
      "Happy birthday to my incredible cousin! Your creativity and passion inspire everyone around you."
  },
  {
    id: 34,
    content:
      "Wishing you a wonderful birthday, cousin! Your positive energy lights up our lives."
  },
  {
    id: 35,
    content:
      "Happy birthday, dear cousin! Your strength and determination inspire me every day. Enjoy your special day!"
  },
  {
    id: 36,
    content:
      "To my cousin: Happy birthday! May your life be filled with love, laughter, and unforgettable moments."
  },
  {
    id: 37,
    content:
      "Cheers to my cousin on your birthday! Your vibrant spirit brings joy to everyone around you."
  },
  {
    id: 38,
    content:
      "Happy birthday to my beloved cousin! Your support means the world to me. Have a fantastic day!"
  },
  {
    id: 39,
    content:
      "Wishing you a fabulous birthday, cousin! Your adventurous spirit is a blessing to our family."
  },
  {
    id: 40,
    content:
      "Happy birthday, cousin! Your laughter fills our lives with joy. May your day be as wonderful as you are!"
  },
  {
    id: 41,
    content:
      "To my cousin on your special day: Your love and friendship are treasures I cherish. Enjoy every moment!"
  },
  {
    id: 42,
    content:
      "Cheers to my cousin on your birthday! Your enthusiasm for life is contagious. Have an amazing day!"
  },
  {
    id: 43,
    content:
      "Happy birthday to my incredible cousin! Your creativity and passion inspire those around you. Enjoy your day!"
  },
  {
    id: 44,
    content:
      "Wishing you a wonderful birthday, cousin! Your unique personality brightens our family gatherings."
  },
  {
    id: 45,
    content:
      "Happy birthday, dear cousin! Your spirit and determination make you truly special. Have an unforgettable day!"
  },
  {
    id: 46,
    content:
      "To my cousin: Happy birthday! May your journey ahead be filled with love, laughter, and joy."
  },
  {
    id: 47,
    content:
      "Cheers to my cousin on your birthday! Your adventurous nature brings excitement to our family."
  },
  {
    id: 48,
    content:
      "Happy birthday to my fabulous cousin! Your kindness and humor light up our lives. Enjoy your special day!"
  },
  {
    id: 49,
    content:
      "Wishing you a fantastic birthday, cousin! Your resilience and positivity inspire everyone you meet."
  },
  {
    id: 50,
    content:
      "Happy birthday, cousin! Your laughter and love are gifts to our family. Have an amazing celebration!"
  },
  {
    id: 51,
    content:
      "To my cousin on your special day: Thank you for being such a wonderful friend. Enjoy every moment!"
  },
  {
    id: 52,
    content:
      "Cheers to my cousin on your birthday! Your adventurous spirit makes every family gathering memorable."
  },
  {
    id: 53,
    content:
      "Happy birthday to my incredible cousin! Your creativity and passion inspire everyone around you."
  },
  {
    id: 54,
    content:
      "Wishing you a wonderful birthday, cousin! Your positive energy lights up our lives."
  },
  {
    id: 55,
    content:
      "Happy birthday, dear cousin! Your strength and determination inspire me every day. Enjoy your special day!"
  },
  {
    id: 56,
    content:
      "To my cousin: Happy birthday! May your life be filled with love, laughter, and unforgettable moments."
  },
  {
    id: 57,
    content:
      "Cheers to my cousin on your birthday! Your vibrant spirit brings joy to everyone around you."
  },
  {
    id: 58,
    content:
      "Happy birthday to my beloved cousin! Your support means the world to me. Have a fantastic day!"
  },
  {
    id: 59,
    content:
      "Wishing you a fabulous birthday, cousin! Your adventurous spirit is a blessing to our family."
  },
  {
    id: 60,
    content:
      "Happy birthday, cousin! Your laughter fills our lives with joy. May your day be as wonderful as you are!"
  },
  {
    id: 61,
    content:
      "To my cousin on your special day: Your love and friendship are treasures I cherish. Enjoy every moment!"
  },
  {
    id: 62,
    content:
      "Cheers to my cousin on your birthday! Your enthusiasm for life is contagious. Have an amazing day!"
  },
  {
    id: 63,
    content:
      "Happy birthday to my incredible cousin! Your creativity and passion inspire those around you. Enjoy your day!"
  },
  {
    id: 64,
    content:
      "Wishing you a wonderful birthday, cousin! Your unique personality brightens our family gatherings."
  },
  {
    id: 65,
    content:
      "Happy birthday, dear cousin! Your spirit and determination make you truly special. Have an unforgettable day!"
  },
  {
    id: 66,
    content:
      "To my cousin: Happy birthday! May your journey ahead be filled with love, laughter, and joy."
  },
  {
    id: 67,
    content:
      "Cheers to my cousin on your birthday! Your adventurous nature brings excitement to our family."
  },
  {
    id: 68,
    content:
      "Happy birthday to my fabulous cousin! Your kindness and humor light up our lives. Enjoy your special day!"
  },
  {
    id: 69,
    content:
      "Wishing you a fantastic birthday, cousin! Your resilience and positivity inspire everyone you meet."
  },
  {
    id: 70,
    content:
      "Happy birthday, cousin! Your laughter and love are gifts to our family. Have an amazing celebration!"
  },
  {
    id: 71,
    content:
      "To my cousin on your special day: Thank you for being such a wonderful friend. Enjoy every moment!"
  },
  {
    id: 72,
    content:
      "Cheers to my cousin on your birthday! Your adventurous spirit makes every family gathering memorable."
  },
  {
    id: 73,
    content:
      "Happy birthday to my incredible cousin! Your creativity and passion inspire everyone around you."
  },
  {
    id: 74,
    content:
      "Wishing you a wonderful birthday, cousin! Your positive energy lights up our lives."
  },
  {
    id: 75,
    content:
      "Happy birthday, dear cousin! Your strength and determination inspire me every day. Enjoy your special day!"
  },
  {
    id: 76,
    content:
      "To my cousin: Happy birthday! May your life be filled with love, laughter, and unforgettable moments."
  },
  {
    id: 77,
    content:
      "Cheers to my cousin on your birthday! Your vibrant spirit brings joy to everyone around you."
  },
  {
    id: 78,
    content:
      "Happy birthday to my beloved cousin! Your support means the world to me. Have a fantastic day!"
  },
  {
    id: 79,
    content:
      "Wishing you a fabulous birthday, cousin! Your adventurous spirit is a blessing to our family."
  },
  {
    id: 80,
    content:
      "Happy birthday, cousin! Your laughter fills our lives with joy. May your day be as wonderful as you are!"
  },
  {
    id: 81,
    content:
      "To my cousin on your special day: Your love and friendship are treasures I cherish. Enjoy every moment!"
  },
  {
    id: 82,
    content:
      "Cheers to my cousin on your birthday! Your enthusiasm for life is contagious. Have an amazing day!"
  },
  {
    id: 83,
    content:
      "Happy birthday to my incredible cousin! Your creativity and passion inspire those around you. Enjoy your day!"
  },
  {
    id: 84,
    content:
      "Wishing you a wonderful birthday, cousin! Your unique personality brightens our family gatherings."
  },
  {
    id: 85,
    content:
      "Happy birthday, dear cousin! Your spirit and determination make you truly special. Have an unforgettable day!"
  },
  {
    id: 86,
    content:
      "To my cousin: Happy birthday! May your journey ahead be filled with love, laughter, and joy."
  },
  {
    id: 87,
    content:
      "Cheers to my cousin on your birthday! Your adventurous nature brings excitement to our family."
  },
  {
    id: 88,
    content:
      "Happy birthday to my fabulous cousin! Your kindness and humor light up our lives. Enjoy your special day!"
  },
  {
    id: 89,
    content:
      "Wishing you a fantastic birthday, cousin! Your resilience and positivity inspire everyone you meet."
  },
  {
    id: 90,
    content:
      "Happy birthday, cousin! Your laughter and love are gifts to our family. Have an amazing celebration!"
  },
  {
    id: 91,
    content:
      "To my cousin on your special day: Thank you for being such a wonderful friend. Enjoy every moment!"
  },
  {
    id: 92,
    content:
      "Cheers to my cousin on your birthday! Your adventurous spirit makes every family gathering memorable."
  },
  {
    id: 93,
    content:
      "Happy birthday to my incredible cousin! Your creativity and passion inspire everyone around you."
  },
  {
    id: 94,
    content:
      "Wishing you a wonderful birthday, cousin! Your positive energy lights up our lives."
  },
  {
    id: 95,
    content:
      "Happy birthday, dear cousin! Your strength and determination inspire me every day. Enjoy your special day!"
  },
  {
    id: 96,
    content:
      "To my cousin: Happy birthday! May your life be filled with love, laughter, and unforgettable moments."
  },
  {
    id: 97,
    content:
      "Cheers to my cousin on your birthday! Your vibrant spirit brings joy to everyone around you."
  },
  {
    id: 98,
    content:
      "Happy birthday to my beloved cousin! Your support means the world to me. Have a fantastic day!"
  },
  {
    id: 99,
    content:
      "Wishing you a fabulous birthday, cousin! Your adventurous spirit is a blessing to our family."
  },
  {
    id: 100,
    content:
      "Happy birthday, cousin! Your laughter fills our lives with joy. May your day be as wonderful as you are!"
  }
];

const godMother = [
  {
    id: 1,
    content:
      "Happy birthday to my amazing godmother! Your love and support mean the world to me. May your special day be filled with all the joy you bring to our lives, and may this year be filled with beautiful moments."
  },
  {
    id: 2,
    content:
      "To my wonderful godmother, happy birthday! Your wisdom and kindness are a guiding light in my life. May your birthday be filled with love, laughter, and everything your heart desires."
  },
  {
    id: 3,
    content:
      "Happy birthday! Your nurturing spirit and warm heart make you the best godmother anyone could ask for. May your day be as beautiful as you are, filled with cherished memories."
  },
  {
    id: 4,
    content:
      "Wishing a fabulous birthday to my beloved godmother! Your love and guidance have shaped my life in so many ways. May your special day be overflowing with joy and happiness."
  },
  {
    id: 5,
    content:
      "To my dear godmother, happy birthday! Your presence in my life is a true blessing. May your day be filled with the love you give to others and surrounded by those who cherish you."
  },
  {
    id: 6,
    content:
      "Happy birthday to the most wonderful godmother! Your strength and love inspire me every day. May this year bring you all the happiness you deserve and more."
  },
  {
    id: 7,
    content:
      "To my lovely godmother, happy birthday! Your kindness and generosity create a world of love around us. May your special day be filled with joy, laughter, and all the things you adore."
  },
  {
    id: 8,
    content:
      "Wishing you a magical birthday! Your love is a guiding light in my life, and I am so grateful for you. May your day be as beautiful as your heart."
  },
  {
    id: 9,
    content:
      "Happy birthday! Your caring nature and endless support mean the world to me. May this year bring you happiness, health, and all the dreams your heart desires."
  },
  {
    id: 10,
    content:
      "To my dear godmother, happy birthday! Your love is a treasure, and I am so lucky to have you in my life. May your special day be filled with beautiful moments and cherished memories."
  },
  {
    id: 11,
    content:
      "Happy birthday to my incredible godmother! Your wisdom and guidance are gifts I cherish every day. May your birthday be as special as you are, filled with joy and love."
  },
  {
    id: 12,
    content:
      "Wishing a fantastic birthday to the best godmother! Your love and support have shaped my life in so many ways. May this year bring you all the happiness you give to others."
  },
  {
    id: 13,
    content:
      "To my amazing godmother, happy birthday! Your nurturing spirit and kind heart make you a true blessing in my life. May your day be filled with laughter and joy."
  },
  {
    id: 14,
    content:
      "Happy birthday! Your strength and love inspire me every day. May this year bring you everything your heart desires and more."
  },
  {
    id: 15,
    content:
      "Wishing you a delightful birthday! Your warmth and compassion create a world of love around us. May your special day be as beautiful as your heart."
  },
  {
    id: 16,
    content:
      "To my beloved godmother, happy birthday! Your love is a guiding light in my life. May your day be filled with joy, laughter, and cherished memories."
  },
  {
    id: 17,
    content:
      "Happy birthday to my wonderful godmother! Your kindness and generosity are a true blessing. May your special day be overflowing with love and happiness."
  },
  {
    id: 18,
    content:
      "Wishing a fabulous birthday to the most incredible godmother! Your love and guidance have shaped my life in countless ways. May your day be filled with joy and beautiful moments."
  },
  {
    id: 19,
    content:
      "To my dear godmother, happy birthday! Your presence in my life is a treasure. May your day be filled with all the happiness and love you bring to others."
  },
  {
    id: 20,
    content:
      "Happy birthday! Your wisdom and kindness are a gift I cherish every day. May this year bring you all the joy you deserve and more."
  },
  {
    id: 21,
    content:
      "To my amazing godmother, happy birthday! Your nurturing spirit and warm heart make you the best godmother anyone could ask for. May your special day be filled with love and laughter."
  },
  {
    id: 22,
    content:
      "Wishing you a joyful birthday! Your kindness creates a world of love around us. May your day be filled with beautiful moments and cherished memories."
  },
  {
    id: 23,
    content:
      "Happy birthday to my incredible godmother! Your love and support mean the world to me. May your special day be as wonderful as you are."
  },
  {
    id: 24,
    content:
      "To my beloved godmother, happy birthday! Your warmth and compassion inspire me every day. May this year bring you happiness, health, and all the dreams your heart desires."
  },
  {
    id: 25,
    content:
      "Happy birthday! Your strength and love are a true blessing in my life. May your special day be filled with joy, laughter, and everything you hold dear."
  },
  {
    id: 26,
    content:
      "To my dear godmother, happy birthday! Your nurturing spirit and kind heart create a beautiful world around us. May your day be filled with love and happiness."
  },
  {
    id: 27,
    content:
      "Wishing you a magical birthday! Your love is a guiding light in my life. May your special day be as beautiful as your heart."
  },
  {
    id: 28,
    content:
      "Happy birthday to my amazing godmother! Your love and support have shaped my life in so many ways. May this year bring you all the happiness you deserve."
  },
  {
    id: 29,
    content:
      "To my wonderful godmother, happy birthday! Your kindness and wisdom inspire me every day. May your special day be filled with joy, laughter, and beautiful memories."
  },
  {
    id: 30,
    content:
      "Happy birthday! Your presence in my life is a true blessing. May your day be filled with love, joy, and everything your heart desires."
  },
  {
    id: 31,
    content:
      "Wishing you a delightful birthday! Your warmth and kindness make the world a better place. May your special day be filled with beautiful moments."
  },
  {
    id: 32,
    content:
      "To my incredible godmother, happy birthday! Your love and guidance are gifts I cherish every day. May this year bring you joy, health, and all your dreams come true."
  },
  {
    id: 33,
    content:
      "Happy birthday to my beloved godmother! Your kindness and generosity have shaped my life in countless ways. May your day be filled with laughter and love."
  },
  {
    id: 34,
    content:
      "To my dear godmother, happy birthday! Your nurturing spirit and warm heart create a world of love around us. May your special day be as wonderful as you are."
  },
  {
    id: 35,
    content:
      "Wishing you a fabulous birthday! Your strength and love inspire me every day. May this year bring you happiness, health, and everything your heart desires."
  },
  {
    id: 36,
    content:
      "Happy birthday! Your laughter and kindness are contagious. May your special day be filled with joy and cherished moments."
  },
  {
    id: 37,
    content:
      "To my amazing godmother, happy birthday! Your love is a guiding light in my life. May your day be filled with beautiful memories and all the joy you bring to others."
  },
  {
    id: 38,
    content:
      "Happy birthday to my wonderful godmother! Your spirit and generosity create a beautiful world around us. May this year bring you all the happiness you deserve."
  },
  {
    id: 39,
    content:
      "Wishing a joyful birthday to my beloved godmother! Your presence in my life is a true treasure. May your special day be filled with love, laughter, and all the things you adore."
  },
  {
    id: 40,
    content:
      "To my dear godmother, happy birthday! Your kindness and support mean the world to me. May your day be filled with happiness and cherished moments."
  },
  {
    id: 41,
    content:
      "Happy birthday! Your love and warmth are a true blessing in my life. May your special day be as wonderful as you are."
  },
  {
    id: 42,
    content:
      "Wishing you a magical birthday! Your nurturing spirit creates a world of love around us. May this year bring you all the joy you deserve."
  },
  {
    id: 43,
    content:
      "To my incredible godmother, happy birthday! Your wisdom and kindness inspire me every day. May your special day be filled with laughter and joy."
  },
  {
    id: 44,
    content:
      "Happy birthday to my amazing godmother! Your love is a guiding light in my life. May your day be filled with beautiful moments and cherished memories."
  },
  {
    id: 45,
    content:
      "To my beloved godmother, happy birthday! Your kindness and support have shaped my life in countless ways. May this year bring you all the happiness and love you give to others."
  },
  {
    id: 46,
    content:
      "Happy birthday! Your strength and love inspire me every day. May your special day be filled with joy, laughter, and everything your heart desires."
  },
  {
    id: 47,
    content:
      "Wishing you a delightful birthday! Your warmth and compassion create a world of love around us. May your day be filled with beautiful moments."
  },
  {
    id: 48,
    content:
      "To my dear godmother, happy birthday! Your love is a treasure, and I am so lucky to have you in my life. May your special day be as wonderful as you are."
  },
  {
    id: 49,
    content:
      "Happy birthday to my incredible godmother! Your wisdom and guidance are gifts I cherish every day. May this year bring you all the joy and happiness you deserve."
  },
  {
    id: 50,
    content:
      "To my amazing godmother, happy birthday! Your nurturing spirit and kind heart create a beautiful world around us. May your day be filled with laughter and love."
  },
  {
    id: 51,
    content:
      "Happy birthday to my extraordinary godmother! Your love and encouragement lift me up every day. May your birthday be as bright and beautiful as your spirit."
  },
  {
    id: 52,
    content:
      "To my beloved godmother, happy birthday! Your kindness touches the hearts of everyone around you. May this year bring you all the happiness you so freely give."
  },
  {
    id: 53,
    content:
      "Happy birthday! Your nurturing spirit is a true blessing in my life. May your day be filled with love, laughter, and the joy of knowing how much you are cherished."
  },
  {
    id: 54,
    content:
      "Wishing a fabulous birthday to my dear godmother! Your love is a guiding light in my life. May this year be filled with wonderful moments and beautiful memories."
  },
  {
    id: 55,
    content:
      "To my wonderful godmother, happy birthday! Your strength and compassion inspire me every day. May your special day be filled with all the love you bring to others."
  },
  {
    id: 56,
    content:
      "Happy birthday! Your presence is a gift that brightens my life. May your day be overflowing with happiness, love, and everything your heart desires."
  },
  {
    id: 57,
    content:
      "To my amazing godmother, happy birthday! Your nurturing spirit creates a warm and loving environment for all of us. May your day be as beautiful as you are."
  },
  {
    id: 58,
    content:
      "Happy birthday to my incredible godmother! Your wisdom and kindness are treasures I hold dear. May your special day be filled with joy and surrounded by loved ones."
  },
  {
    id: 59,
    content:
      "Wishing a delightful birthday to my beloved godmother! Your love and support mean the world to me. May this year bring you all the happiness you deserve."
  },
  {
    id: 60,
    content:
      "To my dear godmother, happy birthday! Your kindness creates a world of love around us. May your special day be filled with laughter, joy, and cherished moments."
  },
  {
    id: 61,
    content:
      "Happy birthday! Your strength and warmth inspire me every day. May this year bring you everything your heart desires and more."
  },
  {
    id: 62,
    content:
      "To my wonderful godmother, happy birthday! Your love is a guiding light in my life. May your day be filled with beautiful memories and all the joy you bring to others."
  },
  {
    id: 63,
    content:
      "Happy birthday to my beloved godmother! Your kindness and support have shaped my life in countless ways. May your special day be as wonderful as you are."
  },
  {
    id: 64,
    content:
      "Wishing you a magical birthday! Your nurturing spirit creates a loving environment for all of us. May this year bring you joy, health, and happiness."
  },
  {
    id: 65,
    content:
      "To my dear godmother, happy birthday! Your love is a treasure that enriches our lives. May your special day be filled with laughter, love, and cherished moments."
  },
  {
    id: 66,
    content:
      "Happy birthday! Your presence in my life is a true blessing. May your day be filled with everything your heart desires and surrounded by loved ones."
  },
  {
    id: 67,
    content:
      "To my amazing godmother, happy birthday! Your kindness and generosity create a beautiful world around us. May this year bring you all the happiness you deserve."
  },
  {
    id: 68,
    content:
      "Wishing you a delightful birthday! Your warmth and compassion inspire me every day. May your special day be filled with love, joy, and everything your heart desires."
  },
  {
    id: 69,
    content:
      "Happy birthday to my incredible godmother! Your love and guidance are gifts I cherish every day. May your day be filled with beautiful moments and laughter."
  },
  {
    id: 70,
    content:
      "To my beloved godmother, happy birthday! Your nurturing spirit and kind heart create a loving world around us. May this year be filled with joy and cherished memories."
  },
  {
    id: 71,
    content:
      "Happy birthday! Your strength and love inspire me every day. May your special day be as wonderful as you are, filled with joy and laughter."
  },
  {
    id: 72,
    content:
      "Wishing you a fabulous birthday! Your love is a guiding light in my life. May this year bring you happiness, health, and all your dreams come true."
  },
  {
    id: 73,
    content:
      "To my dear godmother, happy birthday! Your presence in my life is a true treasure. May your special day be filled with love and joy."
  },
  {
    id: 74,
    content:
      "Happy birthday! Your wisdom and kindness are a true blessing. May your day be filled with laughter, love, and everything you hold dear."
  },
  {
    id: 75,
    content:
      "To my wonderful godmother, happy birthday! Your warmth and kindness create a beautiful world around us. May your day be as special as you are."
  },
  {
    id: 76,
    content:
      "Happy birthday to my amazing godmother! Your love and support mean everything to me. May this year bring you all the joy you bring to our lives."
  },
  {
    id: 77,
    content:
      "To my incredible godmother, happy birthday! Your nurturing spirit and kind heart inspire me every day. May your special day be filled with happiness and beautiful moments."
  },
  {
    id: 78,
    content:
      "Wishing you a magical birthday! Your love is a guiding light in my life. May your day be filled with laughter and surrounded by those who cherish you."
  },
  {
    id: 79,
    content:
      "Happy birthday! Your presence brings joy to my life. May this year be filled with everything your heart desires and more."
  },
  {
    id: 80,
    content:
      "To my dear godmother, happy birthday! Your kindness and support have shaped my life in countless ways. May your special day be filled with love and laughter."
  },
  {
    id: 81,
    content:
      "Happy birthday to my beloved godmother! Your strength and love inspire me every day. May this year bring you all the happiness and joy you deserve."
  },
  {
    id: 82,
    content:
      "Wishing you a delightful birthday! Your warmth and compassion create a loving environment for all of us. May your day be filled with beautiful moments."
  },
  {
    id: 83,
    content:
      "To my amazing godmother, happy birthday! Your love is a treasure that enriches our lives. May your special day be filled with joy, laughter, and cherished memories."
  },
  {
    id: 84,
    content:
      "Happy birthday! Your nurturing spirit and kind heart inspire me every day. May your day be as wonderful as you are, filled with love and happiness."
  },
  {
    id: 85,
    content:
      "To my wonderful godmother, happy birthday! Your love is a guiding light in my life. May this year bring you all the happiness you deserve."
  },
  {
    id: 86,
    content:
      "Happy birthday to my incredible godmother! Your wisdom and kindness are treasures I hold dear. May your day be filled with beautiful moments and laughter."
  },
  {
    id: 87,
    content:
      "Wishing a fabulous birthday to my beloved godmother! Your love and support mean the world to me. May your special day be filled with joy and cherished memories."
  },
  {
    id: 88,
    content:
      "To my dear godmother, happy birthday! Your nurturing spirit creates a world of love around us. May your day be filled with happiness and everything your heart desires."
  },
  {
    id: 89,
    content:
      "Happy birthday! Your strength and love are a true blessing in my life. May this year bring you all the joy and happiness you deserve."
  },
  {
    id: 90,
    content:
      "To my amazing godmother, happy birthday! Your kindness and generosity create a beautiful world around us. May your special day be filled with laughter and joy."
  },
  {
    id: 91,
    content:
      "Happy birthday to my wonderful godmother! Your love is a guiding light in my life. May your day be filled with beautiful memories and all the joy you bring to others."
  },
  {
    id: 92,
    content:
      "Wishing you a delightful birthday! Your warmth and compassion inspire me every day. May this year bring you happiness and everything your heart desires."
  },
  {
    id: 93,
    content:
      "To my beloved godmother, happy birthday! Your nurturing spirit and kind heart create a loving environment for all of us. May your special day be as wonderful as you are."
  },
  {
    id: 94,
    content:
      "Happy birthday! Your wisdom and kindness are treasures I hold dear. May your day be filled with laughter, love, and everything you hold dear."
  },
  {
    id: 95,
    content:
      "To my incredible godmother, happy birthday! Your love and support mean everything to me. May this year bring you all the joy and happiness you deserve."
  },
  {
    id: 96,
    content:
      "Happy birthday to my amazing godmother! Your nurturing spirit and kind heart inspire me every day. May your special day be filled with happiness and cherished moments."
  },
  {
    id: 97,
    content:
      "Wishing you a magical birthday! Your love is a guiding light in my life. May your day be filled with laughter and surrounded by those who cherish you."
  },
  {
    id: 98,
    content:
      "Happy birthday! Your presence brings joy to my life. May this year be filled with everything your heart desires and more."
  },
  {
    id: 99,
    content:
      "To my dear godmother, happy birthday! Your kindness and support have shaped my life in countless ways. May your special day be filled with love and laughter."
  },
  {
    id: 100,
    content:
      "Happy birthday to my beloved godmother! Your strength and love inspire me every day. May this year bring you all the happiness and joy you deserve."
  }
];

const seedData = async () => {
  try {
    const isSeeded = await AsyncStorage.getItem("dataSeeded");

    if (isSeeded) {
      console.log("Data has already been seeded. Skipping...");
      return; // Ne fais rien si les données sont déjà semées
    }

    console.log("Seeding data...");

    const categories = [
      { key: "SON", messages: son },
      { key: "DAUGHTER", messages: daughter },
      { key: "SISTER", messages: sister },
      { key: "BROTHER", messages: brother },
      { key: "FRIEND", messages: friend },
      { key: "NEIGHBOR", messages: neighbor },
      { key: "BESTFRIEND", messages: bestfriend },
      { key: "BOYFRIEND", messages: boyfriend },
      { key: "GIRLFRIEND", messages: girlfriend },
      { key: "HUSBAND", messages: husband },
      { key: "FATHER", messages: father },
      { key: "MOTHER", messages: mother },
      { key: "AUNTIE", messages: auntie },
      { key: "UNCLE", messages: uncle },
      { key: "COUSIN", messages: cousin },
      { key: "NIECE", messages: niece },
      { key: "NEPHEW", messages: nephew },
      { key: "GRAND-SON", messages: grandSon },
      { key: "GRAND-DAUGHTER", messages: grandDaughter },
      { key: "GRAND-FATHER", messages: grandFather },
      { key: "GRAND-MOTHER", messages: grandMother },
      { key: "GOD-FATHER", messages: godFather },
      { key: "GOD-MOTHER", messages: godMother }
    ];

    for (const category of categories) {
      console.log(`Inserting messages for ${category.key}...`);
      await AsyncStorage.setItem(
        category.key,
        JSON.stringify(category.messages)
      );
      console.log(`${category.key} messages seeded successfully!`);
    }

    await AsyncStorage.setItem("dataSeeded", "true");
    console.log("All data seeded successfully!");
  } catch (error) {
    console.error("Error seeding data: ", error);
  }
};

export default seedData;
