export enum ServiceOutput {
  Success = 1,
  Failure = 2
}

export class BaseError extends Error {
  public metadata: any

  constructor(message?: string) {
    super(message)

    Object.setPrototypeOf(this, new.target.prototype)
  }
}

export class CustomError extends BaseError {
  public get name() {
    return "CustomError"
  }

  public get message() {
    return "CustomError"
  }
}

export class TestService {

  public async method1(output: ServiceOutput) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch(output) {
          case ServiceOutput.Failure: {
            throw new CustomError()
          }
          case ServiceOutput.Success: {
            return resolve(true)
          }
        }
      }, 200)
    })
  }
}
