import api, { type apiNames } from "~/api";

interface IDeleteConfirm {
  apiName: apiNames;
  get: Function;
  close: Function;
}

export default ({ apiName, get, close }: IDeleteConfirm) => {
  const deleteId = useState<number | null>(useId(), () => null);

  const deleteConfirm = async () => {
    if (api[apiName]?.delete) {
      const res = await api[apiName]?.delete?.({
        id: deleteId.value,
      });

      if (res?.error) {
        warningPopup(res?.errorResponse?.data?.message);
      } else {
        get();
      }
    }

    close();
    deleteId.value = null;
  };

  const deleteCancel = () => {
    close();
    deleteId.value = null;
  };

  return {
    deleteId,
    deleteConfirm,
    deleteCancel,
  };
};
