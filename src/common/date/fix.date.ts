export class FixDateFormat {
  // Format Date and Time in FIX format
  public static formatDateTime(date: Date) {
    // Lấy các thành phần thời gian theo UTC
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const day = String(date.getUTCDate()).padStart(2, '0');
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0'); // 3 chữ số

    return `${year}${month}${day}-${hours}:${minutes}:${seconds}.${milliseconds}`;
  }

  // Format date in FIX format
  public static formatDate(date: Date) {
    // Lấy các thành phần thời gian theo UTC
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const day = String(date.getUTCDate()).padStart(2, '0');

    return `${year}${month}${day}`;
  }
}
