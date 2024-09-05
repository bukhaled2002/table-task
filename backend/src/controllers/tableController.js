import prisma from "../db/prisma.js";

const filterObj = (object, ...itemToFilter) => {
  let newObj = {};
  Object.keys(object).forEach((el) => {
    if (!itemToFilter.includes(el)) {
      newObj[el] = object[el];
    }
  });
  return newObj;
};

export const addItem = async (req, res) => {
  const { name, color, model, code } = req.body;
  try {
    const item = await prisma.table.create({
      data: {
        name,
        color,
        model,
        code,
      },
    });
    console.log(item);
    res.status(200).json({ message: "Item added successfully", item });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Error in adding to table" });
  }
};
export const getItems = async (req, res) => {
  const page = +req.query.page || 1;
  const pageSize = +req.query.pageSize || 4;
  try {
    const items = await prisma.table.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
    const totalItems = await prisma.table.count();

    res.status(200).json({
      message: "Items retrieved successfully",
      data: {
        items,
        currentPage: page,
        totalPages: Math.ceil(totalItems / pageSize),
        totalItems,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Error in retrieving table" });
  }
};

export const editAll = async (req, res) => {
  try {
    const updates = req.body;

    const updatePromises = updates.map(async (update) => {
      const { id, name: _, ...rest } = update;
      console.log(rest);
      return await prisma.table.update({
        where: { id },
        data: rest,
      });
    });

    const updatedItems = await Promise.all(updatePromises);

    res
      .status(200)
      .json({ message: "Items updated successfully", updatedItems });
  } catch (error) {
    console.error(error); // Log the error for better debugging
    res.status(500).json({ message: "Error updating items" });
  }
};
