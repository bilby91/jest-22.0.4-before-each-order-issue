import "jest"

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000

beforeAll(async () => {
  console.info("BEFORE ALL")

  await new Promise((resolve) => {
    setTimeout(() => { resolve() }, 500)
  })

  console.info("AFTER ALL")
})

beforeEach(async () => {
  console.info("BEFORE EACH")

  await new Promise((resolve) => {
    setTimeout(() => { resolve() }, 800)
  })

  console.info("AFTER EACH")
})

// afterAll(() => {
//   deps.queue.testMode.exit()
// })
//
// afterEach(() => {
//   // Remove any mail sent
//   Object.entries(deps.mailers).forEach((pair) => {
//     const mailer = pair[1]
//
//     mailer.adapter.clean()
//   })
//
//   // Remove queued jobs
//   deps.queue.testMode.clear()
// })
