import { Reservation, Service } from "./types";

export async function fetchServices(date: string): Promise<Service[]> {
  try {
    const response = await fetch(`http://localhost:5225/Services?Date=${encodeURIComponent(date)}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener los servicios:', error);
    throw error;
  }
}

export async function createReservation(reservation: Reservation): Promise<void> {
  try {
    const response = await fetch('http://localhost:5225/Reserva', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservation),
    });

    if (!response.ok) {
      throw new Error('Error al crear la reserva');
    }

  } catch (error) {
    console.error('Error al crear la reserva:', error);
    throw error;
  }
}