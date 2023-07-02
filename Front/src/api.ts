import { Reservation, Service } from "./types";

export async function fetchServices(date: string): Promise<Service[]> {
  try {
    const response = await fetch(`http://holmessoftware-001-site1.atempurl.com/available-services/${encodeURIComponent(date)}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener los servicios:', error);
    throw error;
  }
}

export async function createReservation(reservation: Reservation): Promise<void> {
  try {
    const response = await fetch('http://holmessoftware-001-site1.atempurl.com/new-reservation', {
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