import "jest"
import { TestService, ServiceOutput, CustomError } from "../src/"

describe("TestService", () => {
  let service: TestService

  beforeEach(() => {
    service = new TestService()
  })

  describe("when output is ServiceOutput.Failure", () => {
    it("throws an error", () => {
      expect(service.method1(2)).rejects.toThrowError(CustomError)
    })

    describe("when output is ServiceOutput.Failure", () => {
      it("throws an error", () => {
        expect(service.method1(2)).rejects.toThrowError(CustomError)
      })
    })

    describe("when output is ServiceOutput.Failure", () => {
      it("throws an error", () => {
        expect(service.method1(2)).rejects.toThrowError(CustomError)
      })
    })

    describe("when output is ServiceOutput.Failure", () => {
      it("throws an error", () => {
        expect(service.method1(2)).rejects.toThrowError(CustomError)
      })
    })

    describe("when output is ServiceOutput.Failure", () => {
      it("throws an error", () => {
        expect(service.method1(2)).rejects.toThrowError(CustomError)
      })
    })

  })

  describe("when output is ServiceOutput.Failure", () => {
    it("throws an error", () => {
      expect(service.method1(2)).rejects.toThrowError(CustomError)
    })
  })

  describe("when output is ServiceOutput.Failure", () => {
    it("throws an error", () => {
      expect(service.method1(2)).rejects.toThrowError(CustomError)
    })
  })

  describe("when output is ServiceOutput.Failure", () => {
    it("throws an error", () => {
      expect(service.method1(2)).rejects.toThrowError(CustomError)
    })
  })


  describe("when output is ServiceOutput.Success", () => {
    it("throws an error", () => {
      expect(service.method1(1)).resolves.toBe(true)
    })
  })

  describe("when output is ServiceOutput.Success", () => {
    it("throws an error", () => {
      expect(service.method1(1)).resolves.toBe(true)
    })
  })

  describe("when output is ServiceOutput.Success", () => {
    it("throws an error", () => {
      expect(service.method1(1)).resolves.toBe(true)
    })
  })
})
