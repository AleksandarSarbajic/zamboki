import classes from "../aboutUS/AboutUsText.module.scss";
export default function AboutUsText() {
  return (
    <section className={classes.section}>
      <h3>Our Story and Plan</h3>
      <p>
        Before the beginning of the Second World War, 86,000 Jews lived and
        found themselves in the territory of former Yugoslavia, this number
        includes about 4,000 Jewish refugees from Central Europe. 71,000 Jews
        died (67,000 Jews who lived in Yugoslavia and 4,000 Jewish refugees) or
        82.56% of all Jews. Of this number, a total of 34,777 Jews (including
        1,200 Jewish refugees from Europe) lived in occupied Serbia and found
        themselves at the beginning of the war.
      </p>
      <p>
        28,224, or 82.16% of the Jewish population of Serbia territory of Serbia
        plus Jews in territories annexed by neighboring countries: (Hungary,
        Bulgaria, Italy) perished in various camps and killing fields.
      </p>

      <p>
        Many names of Jewish victims have not been revealed to the light of day,
        nor recorded and torn from oblivion. Unfortunately, what is recorded
        sometimes contains errors in personal data (name and surname, year of
        birth or death, or the name of the same person appears in several
        places, lists). Due to this, and as well as the complexity of the work,
        our plan is to divide the research into phases.
      </p>
      <ul>
        <li>
          <strong>The first phase</strong> would include Belgrade, the capital
          of the Republic of Serbia. The reason lies in the fact that both in
          the pre-war period and in the post-war period, the largest number of
          Jews lived in the capital, followed by other smaller towns. The number
          of Jews in Belgrade before the war was 12,000 - 13,000, that is, about
          3,148 Jewish households.
        </li>
        <li>
          <strong>The second phase</strong> would include the research of other
          places in Serbia where Jews lived and died.
        </li>
        <li>
          <strong>The third phase</strong> would include other Balkan countries
          (Bosnia and Herzegovina, Croatia, North Macedonia).
        </li>
      </ul>
    </section>
  );
}
