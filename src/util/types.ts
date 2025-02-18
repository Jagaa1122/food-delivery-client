type Food = {
  _id: string;
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  category: string;
  createdAt: Date;
  updated: Date;
};

type FoodCategory = {
  _id: string;
  categoryName: string;
  createdAt: Date;
  updated: Date;
};

type FoodOrderItem = {
  food: string;
  quantity: number;
};

type FoodOrder = {
  _id: string;
  user: string;
  totalPrice: number;
  foodOrderItems: FoodOrderItem[];
  status: FoodOrderStatusEnum;
  createdAt: Date;
  updated: Date;
};

type FoodOrderStatusEnum = {
  PENDING: PENDING;
  CANCELED: CANCELED;
  DELIVERED: DELIVERED;
};

type User = {
  _id: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  role: UserRoleEnum;
  orderedFoods: string;
  ttl: Date;
  isVerified: Boolean;
  createdAt: Date;
  updated: Date;
};

type UserRoleEnum = {
  USER: USER;
  ADMIN: Admin;
};

type singupprops = {
  currentStep: number;
  onClick: () => void;
  goBack: () => void;
  onChange: () => void;
};

type Inputprops = {
  label : string;
  placeholder: string;
  errortext: string;
  name: string;
  onChange: () => void;
  type: string;
}
