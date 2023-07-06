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
    const formData = new FormData();
    if (reservation.id != null) formData.append("Reservation.Id", reservation.id!);
    formData.append("Reservation.Service.Id", reservation.service.id!);
    formData.append("Reservation.Customer.Id", reservation.customer.id!);
    formData.append("Reservation.NumberDiners", reservation.numberDiners.toString());
    formData.append("Reservation.Time", reservation.time.toISOString().split("T")[0]);
    formData.append("Reservation.TimeSelected", reservation.time.toLocaleTimeString());
    formData.append("Reservation.State", reservation.state.toString());
    formData.append("Reservation.Note", reservation.note!);
    const response = await fetch('http://holmessoftware-001-site1.atempurl.com/save-reservation', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Error al crear la reserva');
    }

  } catch (error) {
    console.error('Error al crear la reserva:', error);
    throw error;
  }
}