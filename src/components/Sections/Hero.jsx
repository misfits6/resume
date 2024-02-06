import React from "react";

import { basics } from "../../../cv.json";
import { Section } from "../Section";

import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const { name, label, image, location, profiles, phone, email } = basics;
const { city, region } = location;

export const Hero = () => {
  return (
    <Section>
      <div className="flex flex-row justify-between gap-4 items-center">
        <div>
          <h1 className="font-bold bottom-4 text-3xl py-1">{name}</h1>
          <h2 className="font-bold py-1 bottom-4 text-lg text-gray-600 text-balance">
            {label}
          </h2>
          <div className="flex flex-row items-center">
            <TbWorld size={20} color="gray" />
            <p className="px-1">
              {city}, {region}
            </p>
          </div>
          <footer className="flex flex-row py-2 gap-1 items-center">
            <a
              className="border border-gray-400 rounded-md p-1 hover:bg-gray-200"
              href={`mailto:${email}`}
              title={`Enviar un correo electronico a ${name} al correo ${email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiMail size={25} color="gray" />
            </a>
            <a
              className="border border-gray-400 rounded-md p-1 hover:bg-gray-200"
              href={`tel:${phone}`}
              title={`llamar por telefono a ${name} al numero ${phone}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiPhone size={25} color="gray" />
            </a>
            <a
              className="border border-gray-400 rounded-md p-1 hover:bg-gray-200"
              href={profiles[0].url}
              title={`visitar perfil de ${name} en ${profiles[0].network}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLinkedin size={25} color="gray" />
            </a>
            <a
              className="border border-gray-400 rounded-md p-1 hover:bg-gray-200"
              href={profiles[1].url}
              title={`visitar perfil de ${name} en ${profiles[1].network}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={25} color="gray" />
            </a>
          </footer>
        </div>
        <figure>
          <img className=" w-36 rounded-lg" src={image} alt={name} />
        </figure>
      </div>
    </Section>
  );
};
