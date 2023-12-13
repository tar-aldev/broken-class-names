import { BrokenModel } from '../../BrokenModel';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function GET(_: any, res: any) {
  try {
    console.log({
      data: { modelName: BrokenModel.modelName },
    });

    res.status(200).json({ modelName: BrokenModel.modelName });
  } catch (err) {
    res.status(400).json({ message: 'Err' });
  }
}
