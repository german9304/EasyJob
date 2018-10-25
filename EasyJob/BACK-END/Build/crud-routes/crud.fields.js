"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//const fieldRoutes = express();
var routeFields = function (param, fieldRoutes) {
    fieldRoutes.route("testing").get(function (req, res) {
        // console.log(req.query);
        res.json({ success: "sucess" });
    });
    // .post(
    //   async (req: Request, res: Response): Promise<Response> => {
    //     return res;
    //   }
    // )
    // .put(
    //   async (req: Request, res: Response): Promise<Response> => {
    //     return res;
    //   }
    // )
    // .delete(
    //   async (req: Request, res: Response): Promise<Response> => {
    //     return res;
    //   }
    // );
    return fieldRoutes;
};
exports.routeFields = routeFields;
