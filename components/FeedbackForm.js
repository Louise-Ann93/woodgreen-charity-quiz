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
        <input type="hidden" name="form-name" value="pet-quiz" />
        <p className={styles.hidden}>
            <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
        </p>

        <p className={styles.p}>Name the Owner 👀 (extra points if you can name them)</p> 
        <div className={styles.container}>
        <div>
        <div>Image Here</div>
        <label htmlFor="name"></label>
        <input id="name" className={styles['form-field']} type="text" name="name" />
        </div>

        <div>
        <div>Image Here</div>
        <label htmlFor="name"></label>
        <input id="name" className={styles['form-field']} type="text" name="name" />
        </div>

        <div>
        <div>Image Here</div>
        <label htmlFor="name"></label>
        <input id="name" className={styles['form-field']} type="text" name="name" />
        </div>

        <div>
        <div>Image Here</div>
        <label htmlFor="name"></label>
        <input id="name" className={styles['form-field']} type="text" name="name" />
        </div>

        <div>
        <div>Image Here</div>
        <label htmlFor="name"></label>
        <input id="name" className={styles['form-field']} type="text" name="name" />
        </div>

        <div>
        <div>Image Here</div>
        <label htmlFor="name"></label>
        <input id="name" className={styles['form-field']} type="text" name="name" />
        </div>

        <div>
        <div>Image Here</div>
        <label htmlFor="name"></label>
        <input id="name" className={styles['form-field']} type="text" name="name" />
        </div>

        <div>
        <div>Image Here</div>
        <label htmlFor="name"></label>
        <input id="name" className={styles['form-field']} type="text" name="name" />
        </div>

        <div>
        <div>Image Here</div>
        <label htmlFor="name"></label>
        <input id="name" className={styles['form-field']} type="text" name="name" />
        </div>

        <div>
        <div>Image Here</div>
        <label htmlFor="name"></label>
        <input id="name" className={styles['form-field']} type="text" name="name" />
        </div>

        <div>
        <div>Image Here</div>
        <label htmlFor="name"></label>
        <input id="name" className={styles['form-field']} type="text" name="name" />
        </div>

        <div>
        <div>Image Here</div>
        <label htmlFor="name"></label>
        <input id="name" className={styles['form-field']} type="text" name="name" />
        </div>

        <div>
        <div>Image Here</div>
        <label htmlFor="name"></label>
        <input id="name" className={styles['form-field']} type="text" name="name" />
        </div>

        <div>
        <div>Image Here</div>
        <label htmlFor="name"></label>
        <input id="name" className={styles['form-field']} type="text" name="name" />
        </div>

        </div>

        <p className={styles.p}>Question Round!</p> 
        <div className={styles.container}>
        <div>
        <div>Question</div>
        <label htmlFor="email"></label>
        <input id="email" className={styles['form-field']} type="email" name="email"/>
        </div>

        <div>
        <div>Question</div>
        <label htmlFor="email"></label>
        <input id="email" className={styles['form-field']} type="email" name="email"/>
        </div>

        <div>
        <div>Question</div>
        <label htmlFor="email"></label>
        <input id="email" className={styles['form-field']} type="email" name="email"/>
        </div>

        <div>
        <div>Question</div>
        <label htmlFor="email"></label>
        <input id="email" className={styles['form-field']} type="email" name="email"/>
        </div>

        <div>
        <div>Question</div>
        <label htmlFor="email"></label>
        <input id="email" className={styles['form-field']} type="email" name="email"/>
        </div>

        <div>
        <div>Question</div>
        <label htmlFor="email"></label>
        <input id="email" className={styles['form-field']} type="email" name="email"/>
        </div>

        <div>
        <div>Question</div>
        <label htmlFor="email"></label>
        <input id="email" className={styles['form-field']} type="email" name="email"/>
        </div>

        <div>
        <div>Question</div>
        <label htmlFor="email"></label>
        <input id="email" className={styles['form-field']} type="email" name="email"/>
        </div>

        <div>
        <div>Question</div>
        <label htmlFor="email"></label>
        <input id="email" className={styles['form-field']} type="email" name="email"/>
        </div>

        <div>
        <div>Question</div>
        <label htmlFor="email"></label>
        <input id="email" className={styles['form-field']} type="email" name="email"/>
        </div>

        <div>
        <div>Question</div>
        <label htmlFor="email"></label>
        <input id="email" className={styles['form-field']} type="email" name="email"/>
        </div>

        <div>
        <div>Question</div>
        <label htmlFor="email"></label>
        <input id="email" className={styles['form-field']} type="email" name="email"/>
        </div>

        <div>
        <div>Question</div>
        <label htmlFor="email"></label>
        <input id="email" className={styles['form-field']} type="email" name="email"/>
        </div>

        <div>
        <div>Question</div>
        <label htmlFor="email"></label>
        <input id="email" className={styles['form-field']} type="email" name="email"/>
        </div>

        <div>
        <div>Question</div>
        <label htmlFor="email"></label>
        <input id="email" className={styles['form-field']} type="email" name="email"/>
        </div>

        <div>
        <div>Question</div>
        <label htmlFor="email"></label>
        <input id="email" className={styles['form-field']} type="email" name="email"/>
        </div>

        </div>

        <button className={styles.button} type="submit">Submit</button>
      </form>
  )
}
