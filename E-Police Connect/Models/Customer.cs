using System;
using System.Collections.Generic;

namespace E_Police_Connect.Models;

public partial class Customer
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public int? BillNo { get; set; }
}
