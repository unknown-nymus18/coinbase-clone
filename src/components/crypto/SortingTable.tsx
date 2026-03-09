import { Table } from "@coinbase/cds-web/tables/Table";
import { useState, useMemo } from "react";
import { TableCaption } from "@coinbase/cds-web/tables/TableCaption";
import { TableHeader } from "@coinbase/cds-web/tables/TableHeader";
import { TableBody, TableCell, TableRow } from "@coinbase/cds-web/tables";
import { Icon } from "@coinbase/cds-web/icons";

// Mock data for crypto accounts
const accounts = [
  {
    name: "Bitcoin",
    currency: { name: "BTC" },
    balance: { amount: "1.2345", currency: "BTC" },
    primary: true,
  },
  {
    name: "Ethereum",
    currency: { name: "ETH" },
    balance: { amount: "15.789", currency: "ETH" },
    primary: false,
  },
  {
    name: "Litecoin",
    currency: { name: "LTC" },
    balance: { amount: "25.45", currency: "LTC" },
    primary: false,
  },
  {
    name: "Cardano",
    currency: { name: "ADA" },
    balance: { amount: "1500.00", currency: "ADA" },
    primary: true,
  },
];

// Dynamic image URL generator
const getCryptoImageUrl = (currencyName: string) => {
  const imageMap: { [key: string]: string } = {
    BTC: "https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png",
    ETH: "https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png",
    LTC: "https://dynamic-assets.coinbase.com/49567ec5f7c7a1ccb3ce247297c443b3dd32072ee5b91902abc0f6789654e14fd3b9ed8851580b93b4daf7da13324bc61e143a2d391d9e6d8b98f8d69923e4b4/asset_icons/3c5b36c70a05bad40eee4f711aeefbb1809169a17db047bf91f1ef45828349e5.png",
    ADA: "https://dynamic-assets.coinbase.com/da39dfe3632bf7a9c26b5aff94fe72bc1a70850bc488e0c4d68ab3cf87ddac277cd1561427b94acb4b3e37479a1f73f1c37ed311c11a742d6edf512672aea7bb/asset_icons/a55046bc53c5de686bf82a2d9d280b006bd8d2aa1f3bbb4eba28f0c69c7597da.png",
  };

  return imageMap[currencyName] || "https://via.placeholder.com/30x30?text=?";
};

// Custom hooks for sorting functionality
const useSort = ({ data, sortDirection, sortBy }: any) => {
  return useMemo(() => {
    const sorted = [...data].sort((a: any, b: any) => {
      const aValue = sortBy.includes(".")
        ? sortBy.split(".").reduce((obj: any, key: string) => obj[key], a)
        : a[sortBy];
      const bValue = sortBy.includes(".")
        ? sortBy.split(".").reduce((obj: any, key: string) => obj[key], b)
        : b[sortBy];

      if (sortDirection === "ascending") {
        return aValue > bValue ? 1 : -1;
      }
      return aValue < bValue ? 1 : -1;
    });
    return sorted;
  }, [data, sortDirection, sortBy]);
};

const useSortableCell = ({ sortBy, sortDirection, onChange }: any) => {
  return (key: string) => ({
    onClick: () => onChange(key),
  });
};

function SortingTable() {
  const [{ sortBy, sortDirection }, setSort] = useState({
    sortBy: "name",
    sortDirection: "ascending",
  });

  const onChange = (key: any) => {
    const isAscending = key === sortBy && sortDirection === "ascending";
    const ascendingOrDescending = isAscending ? "descending" : "ascending";
    setSort({ sortBy: key, sortDirection: ascendingOrDescending });
  };

  const data = useSort({ data: accounts, sortDirection, sortBy });
  const getSortableProps = useSortableCell({ sortBy, sortDirection, onChange });

  return (
    <Table
      maxHeight={360}
      bordered
      accessibilityLabel="Sortable accounts table"
    >
      <TableCaption>Sorting Example</TableCaption>
      <TableHeader sticky>
        <TableRow>
          <TableCell title="Asset" {...getSortableProps("name")} />
          <TableCell title="Balance" {...getSortableProps("balance.amount")} />
          <TableCell title="Status" alignItems="flex-end" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((account: any) => {
          return (
            <TableRow key={`row--${account.name}`}>
              <TableCell
                start={
                  <img
                    src={getCryptoImageUrl(account.currency.name)}
                    alt={account.name}
                    height={30}
                    width={30}
                    style={{ borderRadius: "50%" }}
                  />
                }
                title={account.name}
                subtitle={account.currency.name}
              />
              <TableCell
                title={`$${account.balance.amount}`}
                subtitle={account.balance.currency}
              />
              <TableCell direction="horizontal" justifyContent="flex-end">
                <Icon
                  name={account.primary ? "circleCheckmark" : "circleCross"}
                  size="m"
                  color={account.primary ? "fgPositive" : "fgNegative"}
                />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default SortingTable;
