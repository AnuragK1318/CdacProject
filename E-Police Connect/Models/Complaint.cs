using System;
using System.Collections.Generic;

namespace E_Police_Connect.Models;

public partial class Complaint
{
    public int ComplaintId { get; set; }

    public int CivilianId { get; set; }

    public DateOnly DateFiled { get; set; }

    public string Description { get; set; } = null!;

    public string Status { get; set; } = null!;

    public virtual Civilian Civilian { get; set; } = null!;
}
