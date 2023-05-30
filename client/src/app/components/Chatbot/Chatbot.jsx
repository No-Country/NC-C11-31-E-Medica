"use client";
import React from "react";
import ChatBot from "react-simple-chatbot";

export default function ChatBotComponent() {
  const steps = [
    {
      id: "0",
      message: "Bienvenido al chatbot, para comenzar, dime tu nombre",
      trigger: "1",
    },
    {
      id: "1",
      user: true,
      validator: (value) => {
        if (
          /^[a-z]{3,16}$/.test(value) ||
          /^[A-Z]{1}[a-z]{2,15}$/.test(value) ||
          /^[A-Z]{3,16}$/.test(value)
        ) {
          return true;
        } else {
          return "Ingresa un nombre valido.";
        }
      },
      trigger: 2,
    },
    {
      id: "2",
      message: `Hola {previousValue}! Dime en que te puedo ayudar?`,
      trigger: 3,
    },
    {
      id: 3,
      options: [
        {
          value: 1,
          label: "¿Como puedo registrarme si soy médico/paciente?",
          trigger: "3a",
        },
        {
          value: 2,
          label: "¿Cómo puedo sacar turnos?",
          trigger: "3b",
        },
        {
          value: 3,
          label: "¿Cuáles son los medios de pago?",
          trigger: "3c",
        },
        {
          value: 4,
          label: "Olvidé mi contraseña",
          trigger: "3d",
        },
        {
          value: 5,
          label: "Quiero cancelar/reprogramar mi turno",
          trigger: "3e",
        },
        {
          value: 6,
          label: "El médico cancelo mi turno, como lo reprogramo",
          trigger: "3f",
        },
        {
          value: 7,
          label: "Quiero hablar con una persona",
          trigger: "3g",
        },
      ],
    },
    {
      id: "3a",
      message:
        "Para registrarte siendo médico o paciente debes ingresar aqui : ....",
      trigger: "4",
    },
    {
      id: "3b",
      message: "Para sacar turnos debes entrar aqui ...",
      trigger: "4",
    },
    {
      id: "3c",
      message: "Los métodos de pagos son ....",
      trigger: "4",
    },
    {
      id: "3d",
      message: "Para recuperar tu contraseña debes entrar aquí",
      trigger: "4",
    },
    {
      id: "3e",
      message: "Para cancelar o reprogramar su turno usted deberá ....",
      trigger: "4",
    },
    {
      id: "3f",
      message: "Si usted quiere reprogramar su turno, debe ingresar en ...",
      trigger: 4,
    },
    {
      id: "3g",
      message:
        "Dejenos su email de contacto para poder responder sus preguntas",
      trigger: "8",
    },
    {
      id: "4",
      message: "He resuelto tu duda?",
      trigger: "5",
    },
    {
      id: "5",
      options: [
        {
          value: 1,
          label: "Si, Muchas Gracias!",
          trigger: "6a",
        },
        {
          value: 2,
          label: "No, no he solucionado el problema",
          trigger: "6b",
        },
      ],
    },
    {
      id: "6a",
      message: "Tiene algun otro inconveniente?",
      trigger: 7,
    },
    {
      id: "6b",
      message:
        "A continuación dejenos su email con su inconveniente y contactaremos en brevedad",
    },
    {
      id: "7",
      options: [
        { value: 1, label: "Si", trigger: "7a" },
        { value: 2, label: "No", trigger: "7b" },
      ],
    },
    {
      id: "7a",
      message:
        "A continuación dejenos su email con su inconveniente y contactaremos en brevedad",
    },
    {
      id: "7b",
      message: "¡Nos alegramos que hayas despejado tus dudas!",
    },
    {
      id: "8",
      user: true,
      trigger: "8a",
    },
    {
      id: "8a",
      message:
        "Muchas gracias por dejar su email, nos contactaremos cuanto antes",
    },
  ];

  return (
    <div>
      <ChatBot
        steps={steps}
        headerTitle="E-Medica Bot"
        placeholder="Escribe tu pregunta"
        floating="true"
      />
    </div>
  );
}
