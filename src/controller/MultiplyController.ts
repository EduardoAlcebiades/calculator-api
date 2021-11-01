import { Request, Response } from "express";

class MultiplyController {
  handle(request: Request, response: Response) {
    const params = request.body.numbers as number[] | string[] | undefined;

    if (!params)
      return response.status(400).json({ message: "Params not found" });

    var result = 0;

    params.forEach((param, i) => {
      param = Number(param);

      if (isNaN(param))
        return response.status(400).json({ message: "Param is not a number" });

      if (i === 0) result = param;
      else result *= param;
    });

    return response.json(result);
  }
}

export default new MultiplyController();
