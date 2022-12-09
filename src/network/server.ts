import express, { Application, Request, Response, NextFunction } from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { applyRoutes } from './router'

class Server {
  public app: Application

  constructor() {
    this.app = express()
    this._config()
    applyRoutes(this.app)
  }

  private _config(): void {
    this.app.use(morgan('dev'))
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(( req: Request, res: Response, next: NextFunction) => {
      res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type')
      next()
    } )  
  }
}

export default new Server().app