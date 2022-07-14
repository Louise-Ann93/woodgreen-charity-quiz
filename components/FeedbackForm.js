import styles from './FeedbackForm.module.css'

export default function FeedbackForm() {
  return (
      <form
        className={styles.form}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="feedback"
        method="POST"
        action="/success"
      >
        <input type="hidden" name="form-name" value="feedback" />
        <p className={styles.hidden}>
            <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
        </p>

        <p className={styles.p}>Name the Owner 👀 (+1 on each if you can name them)</p> 
       
        <div className={styles.container}>
        
        <div>
          <img src='Betty-min.JPG' width="300" height="250" alt="pet picture"/>
          <div>
          <label htmlFor="betty"></label>
          <input id="betty" className={styles['form-field']} type="text" name="betty" placeholder='Type Here'/>
          </div>
        </div>

        <div>
          <img src='Charlie-min.jpg' width="200" height="250" alt="pet picture"/>
          <div>
          <label htmlFor="charlie"></label>
          <input id="charlie" className={styles['form-field']} type="text" name="charlie" placeholder='Type Here'/>
          </div>
        </div>

        <div>
          <img src='COCO-min.JPG' width="250" height="250" alt="pet picture"/>
          <div>
          <label htmlFor="coco"></label>
          <input id="coco" className={styles['form-field']} type="text" name="coco" placeholder='Type Here'/>
          </div>
        </div>

        <div>
          <img src='Dolly-min.jpg' width="325" height="250" alt="pet picture"/>
          <div>
          <label htmlFor="dolly"></label>
          <input id="dolly" className={styles['form-field']} type="text" name="dolly" placeholder='Type Here'/>
          </div>
        </div>

        <div>
          <img src='Frankie-min.JPG' width="175" height="250" alt="pet picture"/>
          <div>
          <label htmlFor="frankie"></label>
          <input id="frankie" className={styles['form-field']} type="text" name="frankie" placeholder='Type Here'/>
          </div>
        </div>

        <div>
          <img src='Hornby-min.jpg' width="225" height="250" alt="pet picture"/>
          <div>
          <label htmlFor="hornby"></label>
          <input id="hornby" className={styles['form-field']} type="text" name="hornby" placeholder='Type Here'/>
          </div>
        </div>

        <div>
          <img src='Jet-min.jpg' width="250" height="250" alt="pet picture"/>
          <div>
          <label htmlFor="jet"></label>
          <input id="jet" className={styles['form-field']} type="text" name="jet" placeholder='Type Here'/>
          </div>
        </div>

        <div>
          <img src='Jinx-min.JPG' width="225" height="250" alt="pet picture"/>
          <div>
          <label htmlFor="jinx"></label>
          <input id="jinx" className={styles['form-field']} type="text" name="jinx" placeholder='Type Here'/>
          </div>
        </div>

        <div>
          <img src='Keef-min.JPG' width="300" height="250" alt="pet picture"/>
          <div>
          <label htmlFor="keef"></label>
          <input id="keef" className={styles['form-field']} type="text" name="keef" placeholder='Type Here'/>
          </div>
        </div>

        <div>
          <img src='Killa-min.JPG' width="200" height="250" alt="pet picture"/>
          <div>
          <label htmlFor="killa"></label>
          <input id="killa" className={styles['form-field']} type="text" name="killa" placeholder='Type Here'/>
          </div>
        </div>

        <div>
          <img src='Lola-min.JPG' width="250" height="250" alt="pet picture"/>
          <div>
          <label htmlFor="lola"></label>
          <input id="lola" className={styles['form-field']} type="text" name="lola" placeholder='Type Here'/>
          </div>
        </div>

        <div>
          <img src='Mable-min.JPG' width="225" height="250" alt="pet picture"/>
          <div>
          <label htmlFor="mable"></label>
          <input id="mable" className={styles['form-field']} type="text" name="mable" placeholder='Type Here'/>
          </div>
        </div>

        <div>
          <img src='Harry-min.jpg' width="350" height="250" alt="pet picture"/>
          <div>
          <label htmlFor="harry"></label>
          <input id="harry" className={styles['form-field']} type="text" name="harry" placeholder='Type Here'/>
          </div>
        </div>

        </div>

        <p className={styles.p}>Question Round!</p> 
        <div className={styles.container}>
        
        <div className={styles.question}>
        <div>Q1, What was the name of Ross's pet monkey in Friends?</div>
        <label>
        <select className={styles['form-field']} name="Q1">
        <option value="Rafiki">Rafiki</option>
        <option value="Marcel">Marcel</option>
        <option value="Abu">Abu</option>
        </select>
        </label>
        </div>

        <div className={styles.question}>
        <div>Q2, Which DJ flipped his car onto its side whilst apparently trying to avoid a cat?</div>
        <label>
        <select className={styles['form-field']} name="Q2">
        <option value="Greg James">Greg James</option>
        <option value="Nick Grimshaw">Nick Grimshaw</option>
        <option value="Jeremy Clarkson">Jeremy Clarkson</option>
        </select>
        </label>
        </div>

        <div className={styles.question}>
        <div>Q3, Hamsters can’t blink?</div>
        <label>
        <select className={styles['form-field']} name="Q3">
        <option value="True">True</option>
        <option value="False">False</option>
        </select>
        </label>
        </div>

        <div className={styles.question}>
        <div>Q4, What was the name of the alien/pug in the film Men in Black?</div>
        <label>
        <select className={styles['form-field']} name="Q4">
        <option value="Frank">Frank</option>
        <option value="Frasier">Frasier</option>
        <option value="Brian">Brian</option>
        </select>
        </label>
        </div>

        <div className={styles.question}>
        <div>Q5, Horses use their tales to communicate with one another?</div>
        <label>
        <select className={styles['form-field']} name="Q5">
        <option value="True">True</option>
        <option value="False">False</option>
        </select>
        </label>
        </div>

        <div className={styles.question}>
        <div>Q6, A Cheshire Cat is a real breed of cat?</div>
        <label>
        <select className={styles['form-field']} name="Q6">
        <option value="True">True</option>
        <option value="False">False</option>
        </select>
        </label>
        </div>

        <div className={styles.question}>
        <div>Q7, Goldfish don’t have stomachs?</div>
        <label>
        <select className={styles['form-field']} name="Q7">
        <option value="True">True</option>
        <option value="False">False</option>
        </select>
        </label>
        </div>

        <div className={styles.question}>
        <div>Q8, There are 240 different species of hamster?</div>
        <label>
        <select className={styles['form-field']} name="Q8">
        <option value="True">True</option>
        <option value="False">False</option>
        </select>
        </label>
        </div>

        <div className={styles.question}>
        <div>Q9, What is the name of Andy’s pet dachshund in Toy Story?</div>
        <label>
        <select className={styles['form-field']} name="Q9">
        <option value="Buster">Buster</option>
        <option value="Max">Max</option>
        <option value="Woody">Woody</option>
        </select>
        </label>
        </div>

        <div className={styles.question}>
        <div>Q10, What was the name of Hagrid's pet dog?</div>
        <label>
        <select className={styles['form-field']} name="Q10">
        <option value="Mrs Norris">Mrs, Norris</option>
        <option value="Fang">Fang</option>
        <option value="Scabbers">Scabbers</option>
        </select>
        </label>
        </div>

        <div className={styles.question}>
        <div>Q11, The oldest Tortoise was aged?</div>
        <label>
        <select className={styles['form-field']} name="Q11">
        <option value="100">100</option>
        <option value="175">175</option>
        <option value="200">200</option>
        </select>
        </label>
        </div>

        <div className={styles.question}>
        <div>Q12, What is the name of the Simpsons family dog?</div>
        <label>
        <select className={styles['form-field']} name="Q12">
        <option value="Rudolf">Rudolf</option>
        <option value="Santas Helper">Santa's Little Helper</option>
        <option value="Snowball">Snowball II</option>
        </select>
        </label>
        </div>

        <div className={styles.question}>
        <div>Q13, What type of animal did Mike Tyson once keep as a pet?</div>
        <label>
        <select className={styles['form-field']} name="Q13">
        <option value="Lion">Lion</option>
        <option value="Monkey">Monkey</option>
        <option value="Tiger">Tiger</option>
        </select>
        </label>
        </div>

        <div className={styles.question}>
        <div>Q14, Which country do Guinea Pigs originate from?</div>
        <label>
        <select className={styles['form-field']} name="Q14">
        <option value="South America">South America</option>
        <option value="Africa">Africa</option>
        <option value="Thailand">Thailand</option>
        </select>
        </label>
        </div>

        <div className={styles.question}>
        <div>Q15, What is the name of the Downing Street Cat - Bonus what is his Title?</div>
        <label htmlFor='downingstreet'></label>
        <input id="downingstreet" className={styles['form-field']} type="text" name="downingstreet" placeholder='Type Here' />
        </div>

        <div className={styles.question}>
        <div>Bonus Question! +2 points - What is the name of Lou's pet?</div>
        <label>
        <select className={styles['form-field']} name="Q16">
        <option value="Trevor">Trevor</option>
        <option value="Harry">Harry</option>
        <option value="Ron">Ron</option>
        </select>
        </label>
        </div>
      
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.button} type="submit">Submit</button>
        </div>

      </form>
  )
}
