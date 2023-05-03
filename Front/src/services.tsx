import React, { useEffect, useState } from 'react';

interface ServiceData {
  name: string;
  date: string;
  time: string;
}

const Servicios: React.FC = () => {
  const [final, setFinal] = useState<ServiceData[]>([]);

  useEffect(() => {
    fetch('http://localhost:5225/Services')
      .then((resp) => resp.json())
      .then((data: ServiceData[]) => {
        setFinal(data);
      });
  }, []);

  return (
    <>
      <ul>
        {final.map((data: ServiceData, index: number) => {
          console.log(data);
          return (
            <li key={data.name}>
              "{data.name}" - Dia: {data.date} Horario: {data.time}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Servicios;
