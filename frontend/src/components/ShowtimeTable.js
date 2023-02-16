import React from "react";
import ShowtimeRow from "./ShowtimeRow";
import { MdEdit, MdDeleteForever } from 'react-icons/md';


export default function ShowtimeTable({ showtimes, onDelete, onEdit }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="">Showtime ID</th>
          <th className="">Showtime Date & Time</th>
          <th className="">Movie ID</th>
          <th className="">Theater ID</th>
          <th className="">Edit Record</th>
          <th className="">Delete Record</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="">1</td>
          <td className="">2023-02-10 16:00:00</td>
          <td className="">1</td>
          <td className="">1</td>
          <td className=""><a href="./ShowtimeUpdate" class="icons"><MdEdit/></a></td>
          <td className=""><a href="./ShowtimeConfirmDelete" class="icons"><MdDeleteForever/></a></td>
        </tr>
        <tr>
          <td className="">2</td>
          <td className="">2023-02-10 15:00:00</td>
          <td className="">2</td>
          <td className="">4</td>
          <td className=""><a href="./ShowtimeUpdate" class="icons"><MdEdit/></a></td>
          <td className=""><a href="./ShowtimeConfirmDelete" class="icons"><MdDeleteForever/></a></td>
        </tr>
        <tr>
          <td className="">3</td>
          <td className="">2023-02-14 17:00:00</td>
          <td className="">2</td>
          <td className="">4</td>
          <td className=""><a href="./ShowtimeUpdate" class="icons"><MdEdit/></a></td>
          <td className=""><a href="./ShowtimeConfirmDelete" class="icons"><MdDeleteForever/></a></td>
        </tr>
        <tr>
          <td className="">4</td>
          <td className="">2023-02-14 18:00:00</td>
          <td className="">7</td>
          <td className="">2</td>
          <td className=""><a href="./ShowtimeUpdate" class="icons"><MdEdit/></a></td>
          <td className=""><a href="./ShowtimeConfirmDelete" class="icons"><MdDeleteForever/></a></td>
        </tr>
        <tr>
          <td className="">5</td>
          <td className="">2023-02-14 18:00:00</td>
          <td className="">7</td>
          <td className="">1</td>
          <td className=""><a href="./ShowtimeUpdate" class="icons"><MdEdit/></a></td>
          <td className=""><a href="./ShowtimeConfirmDelete" class="icons"><MdDeleteForever/></a></td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
  );
}

//        {customers.map((customer, i) => (
//  <CustomerRow
//  customer={customer}
// onDelete={onDelete}
//onEdit={onEdit}
// key={i}
///>
//))}
