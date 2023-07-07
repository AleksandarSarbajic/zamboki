import classes from "../Contact/ContactTable.module.scss";
export default function ContactTable() {
  return (
    <section className={`page`}>
      <h2 className={classes.heading}>Donation info</h2>

      <table className={classes.table}>
        <thead className={classes.head}>
          <tr>
            <th>Name</th>
            <th>Br. No.</th>
            <th>Branch name</th>
            <th>Bic Code</th>
            <th>Iban No.</th>
            <th>Account Currency</th>
          </tr>
        </thead>
        <tbody className={classes.body}>
          <tr>
            <td>Israel discount bank</td>
            <td>0042</td>
            <td>Netanya</td>
            <td>IDBLILITXXX</td>
            <td>IL730110420000198515288</td>
            <td>Euro</td>
          </tr>
          <tr>
            <td>Israel discount bank</td>
            <td>0042</td>
            <td>Netanya</td>
            <td>IDBLILITXXX</td>
            <td>IL450110420000198515210</td>
            <td>Us Dollar</td>
          </tr>
          <tr>
            <td>Israel discount bank</td>
            <td>0042</td>
            <td>Netanya</td>
            <td>IDBLILITXXX</td>
            <td>IL940110420000197777807</td>
            <td>New Israel Shekel</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
