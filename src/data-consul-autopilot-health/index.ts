// https://www.terraform.io/docs/providers/consul/d/autopilot_health
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConsulAutopilotHealthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/d/autopilot_health#datacenter DataConsulAutopilotHealth#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/consul/d/autopilot_health#id DataConsulAutopilotHealth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataConsulAutopilotHealthServers {
}

export function dataConsulAutopilotHealthServersToTerraform(struct?: DataConsulAutopilotHealthServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataConsulAutopilotHealthServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataConsulAutopilotHealthServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConsulAutopilotHealthServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // healthy - computed: true, optional: false, required: false
  public get healthy() {
    return this.getBooleanAttribute('healthy');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_contact - computed: true, optional: false, required: false
  public get lastContact() {
    return this.getStringAttribute('last_contact');
  }

  // last_index - computed: true, optional: false, required: false
  public get lastIndex() {
    return this.getNumberAttribute('last_index');
  }

  // last_term - computed: true, optional: false, required: false
  public get lastTerm() {
    return this.getNumberAttribute('last_term');
  }

  // leader - computed: true, optional: false, required: false
  public get leader() {
    return this.getBooleanAttribute('leader');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // serf_status - computed: true, optional: false, required: false
  public get serfStatus() {
    return this.getStringAttribute('serf_status');
  }

  // stable_since - computed: true, optional: false, required: false
  public get stableSince() {
    return this.getStringAttribute('stable_since');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // voter - computed: true, optional: false, required: false
  public get voter() {
    return this.getBooleanAttribute('voter');
  }
}

export class DataConsulAutopilotHealthServersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataConsulAutopilotHealthServersOutputReference {
    return new DataConsulAutopilotHealthServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/consul/d/autopilot_health consul_autopilot_health}
*/
export class DataConsulAutopilotHealth extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_autopilot_health";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/consul/d/autopilot_health consul_autopilot_health} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConsulAutopilotHealthConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataConsulAutopilotHealthConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'consul_autopilot_health',
      terraformGeneratorMetadata: {
        providerName: 'consul',
        providerVersion: '2.17.0',
        providerVersionConstraint: '~> 2.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._datacenter = config.datacenter;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // failure_tolerance - computed: true, optional: false, required: false
  public get failureTolerance() {
    return this.getNumberAttribute('failure_tolerance');
  }

  // healthy - computed: true, optional: false, required: false
  public get healthy() {
    return this.getBooleanAttribute('healthy');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // servers - computed: true, optional: false, required: false
  private _servers = new DataConsulAutopilotHealthServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datacenter: cdktf.stringToTerraform(this._datacenter),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
