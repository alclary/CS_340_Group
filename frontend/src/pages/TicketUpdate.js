import React from "react";

export default function TicketUpdate() {
  return (
    <div>
      <p>Edit this record below</p>
      <table>
        <tr>
          <th>Ticket ID</th>
          <th>Customer ID</th>
          <th>Showtime ID</th>
          <th>Price</th>
          <th>Payment Method</th>
        </tr>

        <tr>
          <td className="">

          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>

          </td>

          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>

          <td className="">

          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>

          </td>
          <td className="">
          <select>
            <option>5.00</option>
            <option>9.00</option>
          </select>


          </td>
          <select>
            <option>CASH</option>
            <option>CREDIT</option>
            <option>DEBIT</option>
          </select>
        </tr>
        </table>

        <button>
          <a href="./Ticket">Confirm</a>
        </button>
        <button>
          <a href="./Ticket">Cancel</a>
        </button>
    </div>
  );
}