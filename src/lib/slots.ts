/** Tijdsloten per weekdag. 0 = zondag. Avondsloten alleen op afspraak (di + do). */
export const slotsByDay: Record<number, string[]> = {
  0: [],
  1: ["10:00", "11:30", "13:30", "15:00"], // maandag: alleen op afspraak
  2: ["10:00", "11:30", "13:30", "15:00", "16:30", "19:00", "20:00"],
  3: ["10:00", "11:30", "13:30", "15:00", "16:30"],
  4: ["10:00", "11:30", "13:30", "15:00", "16:30", "19:00", "20:00"],
  5: ["10:00", "11:30", "13:30", "15:00", "16:30"],
  6: ["10:00", "11:30", "13:00", "14:30"],
};

export const byAppointmentOnly = [1];
export const eveningSlots = ["19:00", "20:00"];

export function isValidSlot(date: string, time: string) {
  const d = new Date(date + "T12:00:00");
  if (Number.isNaN(d.getTime())) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (d < today) return false;
  return (slotsByDay[d.getDay()] ?? []).includes(time);
}

